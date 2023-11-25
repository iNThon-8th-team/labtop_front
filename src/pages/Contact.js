// Contact.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Contact = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contactemail"); // 'contact'는 Contact 페이지의 경로입니다.
  };
  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          학부연구생 모집 공고
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          우리 연구실에서는 열정적이고 창의적인 학부연구생을 모집하고 있습니다.
          연구실에서는 다음과 같은 주제로 연구가 진행됩니다:
        </Typography>

        <Typography variant="h4" sx={{ mb: 2 }}>
          모집 기간: 11/26 ~ 12/15
        </Typography>

        <List>
          <ListItem>
            <ListItemText primary="인공지능 및 머신러닝" />
          </ListItem>
          <ListItem>
            <ListItemText primary="데이터 분석 및 시각화" />
          </ListItem>
          <ListItem>
            <ListItemText primary="사물 인터넷(IoT) 및 임베디드 시스템" />
          </ListItem>
          <ListItem>
            <ListItemText primary="클라우드 컴퓨팅 및 네트워크" />
          </ListItem>
        </List>

        <Typography variant="body1" sx={{ mb: 2 }}>
          관심 있는 학부생들은 아래 연락처로 문의해 주시기 바랍니다.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleContactClick}
        >
          연락하기
        </Button>
      </Paper>
    </Box>
  );
};

export default Contact;
