import React, { useEffect, useState } from "react";
import { MailList } from "../api/contactApi";
import { Box, Paper, Typography, Tabs, Tab, Button, Grid } from "@mui/material";
import { COLORS } from "../lib/styles/theme";
import { useNavigate } from "react-router-dom";

// 현재 사용자의 이메일을 여기에 추가합니다.

const EmailPage = () => {
  const [mailList, setMailList] = useState([]);
  const [isreceiving, setIsReceiving] = useState(false);

  const [currentTab, setCurrentTab] = useState(0);
  const [professorNames, setProfessorNames] = useState([]);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  // 모든 메일에서 사용자 이름을 중복 없이 추출하는 함수
  const extractUsernames = (mails) => {
    const namesSet = new Set();
    mails.forEach((mail) => {
      namesSet.add(
        mail.receiving ? mail.receiver.username : mail.sender.username
      );
    });
    return Array.from(namesSet);
  };

  // 선택된 교수님과의 메일 대화만 필터링하여 반환하는 함수
  const filteredMails = mailList.filter((mail) => {
    const username = mail.receiving
      ? mail.sender.username
      : mail.receiver.username;
    return username === professorNames[currentTab];
  });

  useEffect(() => {
    let isMounted = true; // 마운트 상태 추적

    async function fetchData() {
      try {
        const mail_coming = await MailList();
        if (isMounted) {
          console.log(mail_coming);
          setMailList(mail_coming);
        }

        const professorUsernames = await extractProfessorUsernames(mail_coming);
        if (isMounted) {
          console.log(professorUsernames);
          setProfessorNames(professorUsernames);
        }
      } catch (error) {
        if (isMounted) {
          console.error("메일 목록을 불러오는 데 실패했습니다:", error);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false; // 컴포넌트 언마운트 시 마운트 상태를 false로 변경
    };
  }, []);

  // 교수님들의 username을 중복 없이 추출하는 함수

  const extractProfessorUsernames = (mails) => {
    const professorSet = new Set();
    mails?.forEach((mail) => {
      if (mail.receiving) {
        professorSet.add(mail.sender.username);
      } else {
        professorSet.add(mail.receiver.username);
      }
    });
    // Set을 배열로 변환하고 최대 5명까지만 포함
    return Array.from(professorSet).slice(0, 5);
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat("ko-KR", options).format(
      new Date(dateString)
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
        메일 대화
      </Typography>
      <Tabs value={currentTab} onChange={handleTabChange} centered>
        {professorNames.map((name, index) => (
          <Tab key={name} label={name} />
        ))}
      </Tabs>
      {filteredMails.map((email, index) => (
        <Box
          key={email.id}
          sx={{
            display: "flex",
            justifyContent: !email?.receiving ? "flex-end" : "flex-start",
            mb: 2,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              maxWidth: "80%",
              padding: "10px 20px",
              bgcolor: !email?.receiving ? "primary.light" : "secondary.light",
              elevation: 0,
              borderRadius: "20px",
              borderTopLeftRadius: !email?.receiving ? "20px" : "0",
              borderTopRightRadius: !email?.receiving ? "0" : "20px",
              mb: index < mailList.length - 1 ? 2 : 0,
            }}
          >
            <Typography
              variant="body1"
              sx={{ wordWrap: "break-word", color: COLORS.white }}
            >
              {email.content}
            </Typography>
            <Typography
              variant="caption"
              display="block"
              sx={{ textAlign: "right", mt: 1 }}
            >
              {formatDate(email.createdAt)}
            </Typography>
          </Paper>
        </Box>
      ))}
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{ width: "80%", height: "50px", marginTop: "50px" }}
          variant="contained"
          onClick={() => navigate("/email")}
        >
          <Typography variant="h4" color={COLORS.white}>
            이력서 보러가기
          </Typography>
        </Button>
      </Grid>
    </Box>
  );
};

export default EmailPage;
