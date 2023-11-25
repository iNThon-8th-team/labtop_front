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
const ProfessorMyPage = ({ user, labData }) => {
  const navigate = useNavigate();
  console.log(labData);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Card
        sx={{
          paddingX: "40px",
          paddingY: "20px",
          margin: "10px",
          width: "80%",
          maxWidth: "800px",
        }}
      >
        <Typography variant="h2" align="center">
          내 정보
        </Typography>
        <Box padding="10px" />
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item>
            <Grid
              container
              spacing={1}
              paddingX={1}
              paddingY={2}
              alignItems="flex-end"
            >
              <Grid item>
                <Typography variant="h2">{user.username}</Typography>
              </Grid>
              <Grid item>
                <Typography>교수</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} paddingX={1}>
              <Grid item>
                <MailOutlineIcon />
              </Grid>
              <Grid item>
                <Typography variant="h4">{user.email}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} paddingX={1}>
              <Grid item>
                <BiotechIcon />
              </Grid>
              <Grid item>
                <Typography variant="h4">{labData.name}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} paddingX={1}>
              <Grid item>
                <LanguageIcon />
              </Grid>
              <Grid item>
                <Typography variant="h4">{labData.introduction}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} paddingX={1}>
              <Grid item>
                <CollectionsBookmarkOutlinedIcon />
              </Grid>
              <Grid item>
                <Typography variant="h4">{"논문 개수"}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item paddingX={2}>
            <Box width="200px" height="200px">
              <img
                src={PLRG}
                alt="Professor"
                width="200px"
                height="200px"
                style={{ borderRadius: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Box padding="10px" />
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={5} md={3}>
          <Button
            sx={{ width: "100%", height: "50px" }}
            variant="contained"
            onClick={() => navigate("/lab/write")}
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
              <Grid item>
                <Typography variant="h2">{user.username}</Typography>
              </Grid>
              <Grid item>
                <Typography>학생</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} paddingX={1}>
              <Grid item>
                <MailOutlineIcon />
              </Grid>
              <Grid item>
                <Typography variant="h4">{user.email}</Typography>
              </Grid>
            </Grid>
            {user.isResearcher ?? (
              <>
                <Grid container spacing={1} paddingX={1}>
                  <Grid item>
                    <BiotechIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">{"연구소 이름"}</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} paddingX={1}>
                  <Grid item>
                    <LanguageIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">{"연구소 사이트 주소"}</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={1} paddingX={1}>
                  <Grid item>
                    <CollectionsBookmarkOutlinedIcon />
                  </Grid>
                  <Grid item>
                    <Typography variant="h4">{"논문 개수"}</Typography>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
          <Grid item paddingX={2}>
            <Box width="200px" height="200px">
              <img
                src={PLRG}
                alt="Professor"
                width="200px"
                height="200px"
                style={{ borderRadius: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Box padding="10px" />
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={5} md={3}>
          <Button
            sx={{ width: "100%", height: "50px" }}
            variant="contained"
            onClick={() => navigate("/")}
          >
            <Typography variant="h4" color={COLORS.white}>
              내 포토폴리오 관리하기
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={5} md={3}>
          <Button sx={{ width: "100%", height: "50px" }} variant="contained">
            <Typography variant="h4" color={COLORS.white}>
              새 스터디 글 작성하기
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const MyPage = () => {
  const { User } = useUserStore();

  const [labData, setLabData] = useState({});

  useEffect(() => {
    const getLabData = async () => {
      try {
        const labData = await fetchMyLab(User.id);
        if (labData) {
          setLabData(labData);
        }
      } catch (error) {
        // 에러 처리
      }
    };

    if (User.isProfessor || User.isResearcher) {
      getLabData();
    }
  }, [User]);

  return User.isProfessor ? (
    <ProfessorMyPage user={User} labData={labData} />
  ) : (
    <UserMyPage user={User} labData={labData} />
  );
};

export default EmailPage;
