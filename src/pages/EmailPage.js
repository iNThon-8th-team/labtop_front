import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";

// 임시로 사용할 메일 데이터
const emails = [
  {
    id: 1,
    sender: "alice@example.com",
    content: "안녕하세요, 프로젝트 관련해서 질문이 있습니다.",
    timestamp: "9:00 AM",
  },
  {
    id: 2,
    sender: "bob@example.com",
    content: "안녕하세요, 어떤 부분이 궁금하신가요?",
    timestamp: "9:05 AM",
  },
];

const EmailPage = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", my: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        메일 대화
      </Typography>
      <List sx={{ bgcolor: "background.paper" }}>
        {emails.map((email, index) => (
          <React.Fragment key={email.id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={email.sender}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {email.content}
                    </Typography>
                    — {email.timestamp}
                  </React.Fragment>
                }
              />
            </ListItem>
            {index < emails.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default EmailPage;
