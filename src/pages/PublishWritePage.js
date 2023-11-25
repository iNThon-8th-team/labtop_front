import { useState } from "react";
import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import { COLORS } from "../lib/styles/theme";

const PublishWritePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted", { title, content, link });
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
        논문 등록하기
      </Typography>
      <TextField
        fullWidth
        sx={{ maxWidth: " 800px" }}
        required
        label="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        fullWidth
        sx={{ maxWidth: " 800px" }}
        required
        label="논문 업로드 사이트 링크"
        rows={4}
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <TextField
        fullWidth
        sx={{ maxWidth: " 800px" }}
        required
        label="논문 요약"
        multiline
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Box display="flex" paddingTop={2} justifyContent="center">
        <Button
          sx={{ width: "80%", minWidth: "300px", height: "50px" }}
          variant="contained"
          type="submit"
        >
          <Typography variant="h4" color={COLORS.white}>
            등록하기
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default PublishWritePage;
