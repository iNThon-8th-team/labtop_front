import React from "react";
import { Box, Paper, Typography } from "@mui/material";

// 임시로 사용할 메일 데이터와 현재 사용자의 이메일
const emails = [
  {
    id: 1,
    sender: "alice@example.com",
    content: "안녕하세요, 프로젝트 관련해서 질문이 있습니다.",
    timestamp: "9:00 AM",
  },
  {
    id: 2,
    sender: "current_user@example.com",
    content: "안녕하세요, 어떤 부분이 궁금하신가요?",
    timestamp: "9:05 AM",
  },
  // 더 많은 메일 데이터...
];

const currentUserEmail = "current_user@example.com";

const EmailPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
        메일 대화
      </Typography>
      {emails.map((email) => (
        <Box
          key={email.id}
          sx={{
            display: "flex",
            justifyContent:
              email.sender === currentUserEmail ? "flex-end" : "flex-start",
            mb: 2,
            position: "relative",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              maxWidth: "80%",
              padding: "10px 20px",
              bgcolor:
                email.sender === currentUserEmail
                  ? "primary.light"
                  : "secondary.light",
              borderRadius: "20px",
              position: "relative",
            }}
          >
            {/* Triangle for speech bubble effect */}
            <Box
              sx={{
                position: "absolute",
                bottom: "100%",
                left: email.sender === currentUserEmail ? "auto" : "20px",
                right: email.sender === currentUserEmail ? "20px" : "auto",
                width: 0,
                height: 0,
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: `15px solid ${
                  email.sender === currentUserEmail
                    ? "primary.light"
                    : "secondary.light"
                }`,
              }}
            />
            <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
              {email.content}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              sx={{ textAlign: "right", mt: 1 }}
            >
              {email.timestamp}
            </Typography>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default EmailPage;
