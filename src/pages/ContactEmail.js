// ContactForm.js
import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { postMailApi } from "../api/contactApi";
import { enqueueSnackbar } from "notistack";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();

  const professorId = location.state?.searchresult;

  const handleSubmit = (event) => {
    event.preventDefault();
    postMailApi(message, professorId).then((res) => {
      console.log(res);
      console.log("Form Submitted", { name, subject, message });
      enqueueSnackbar("메일 전송에 성공하였습니다.", {
        variant: "success",
      });
    });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h2" sx={{ m: 2 }}>
        컨택 메일 작성하기
      </Typography>

      <TextField
        sx={{
          width: "600px",
        }}
        required
        label="제목"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <TextField
        sx={{
          width: "600px",
        }}
        required
        label="메시지"
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ width: "400px" }}>
        보내기
      </Button>
    </Box>
  );
};

export default ContactForm;
