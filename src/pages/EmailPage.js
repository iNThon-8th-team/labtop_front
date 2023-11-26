import React, { useEffect, useState } from "react";
import { MailList } from "../api/contactApi";
import { Box, Paper, Typography, Tabs, Tab, Button, Grid } from "@mui/material";
import { COLORS } from "../lib/styles/theme";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/LoginUser";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from "@mui/icons-material/Send";
import { postMailApi } from "../api/contactApi";

// 현재 사용자의 이메일을 여기에 추가합니다.

const EmailPage = () => {
  const [mailList, setMailList] = useState([]);
  const [message, setMessage] = useState("");
  const [isreceiving, setIsReceiving] = useState(false);

  const [currentTab, setCurrentTab] = useState(1);
  const [professorNames, setProfessorNames] = useState([]);
  const navigate = useNavigate();

  const { User } = useUserStore();

  const sendMessage = (event) => {
    console.log(professorNames);
    console.log(professorNames[currentTab]?.id);
    event.preventDefault();
    postMailApi(message, professorNames[currentTab]?.id).then((res) => {
      window.location.reload();
    });
  };

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  // 선택된 교수님과의 메일 대화만 필터링하여 반환하는 함수
  const filteredMails = mailList.filter((mail) => {
    const username = mail.receiving
      ? mail.sender.username
      : mail.receiver.username;
    return username === professorNames[currentTab].name;
  });

  const [isProfessor, setIsProfessor] = useState(false);

  useEffect(() => {
    let isMounted = true; // 마운트 상태 추적
    if (User.isProfessor == true) setIsProfessor(true);
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
  const hasObject = (set, objectToFind) => {
    for (let item of set) {
      if (
        Object.keys(item).length === Object.keys(objectToFind).length &&
        Object.keys(item).every((key) => item[key] === objectToFind[key])
      ) {
        return true;
      }
    }
    return false;
  };
  const extractProfessorUsernames = (mails) => {
    const professorSet = new Set();
    mails?.forEach((mail) => {
      if (mail.receiving) {
        const val = { name: mail.sender.username, id: mail.sender.id };
        if (!hasObject(professorSet, val)) professorSet.add(val);
      } else {
        const val = { name: mail.receiver.username, id: mail.receiver.id };
        if (!hasObject(professorSet, val)) professorSet.add(val);
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

      <Tabs
        sx={{
          marginBottom: "10px",
        }}
        value={currentTab}
        onChange={handleTabChange}
        centered
      >
        {professorNames.map((p, index) => (
          <Tab key={p.name} label={p.name} />
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
      <TextField
        fullWidth
        label="연락을 보내보세요"
        id="fullWidth"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // 'setValue' 대신 'onChange' 이벤트를 사용하여 값을 업데이트합니다.
        sx={{
          marginBottom: "10px",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={sendMessage}>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {isProfessor && (
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
      )}
    </Box>
  );
};

export default EmailPage;
