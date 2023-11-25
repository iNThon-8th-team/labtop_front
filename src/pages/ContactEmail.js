// ContactForm.js
import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 폼 제출 로직을 여기에 구현합니다.
    // 예: 서버로 POST 요청을 보내는 코드
    console.log("Form Submitted", { name, email, subject, message });
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
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h2" sx={{ m: 2 }}>
        컨택 메일 작성하기
      </Typography>
      <TextField
        sx={{
          width: "600px",
        }}
        required
        label="성명"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
