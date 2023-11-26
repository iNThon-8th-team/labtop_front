import React, { useState, useEffect } from "react";
import PLRG from "../img/PLRG.png";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import useUserStore from "../stores/LoginUser";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BiotechIcon from "@mui/icons-material/Biotech";
import LanguageIcon from "@mui/icons-material/Language";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import { COLORS } from "../lib/styles/theme";
import { useNavigate } from "react-router-dom";
import { fetchMyLab } from "../api/labApi";

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
            <Typography variant="h4" color={COLORS.white}>
              내 연구실 관리하기
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={5} md={3}>
          <Button
            sx={{ width: "100%", height: "50px" }}
            variant="contained"
            onClick={() => navigate("/email")}
          >
            <Typography variant="h4" color={COLORS.white}>
              이메일 관리하기
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={5} md={3}>
          <Button
            sx={{ width: "100%", height: "50px" }}
            variant="contained"
            onClick={() => navigate("/publish/write")}
          >
            <Typography variant="h4" color={COLORS.white}>
              새 논문 등록하기
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const UserMyPage = ({ user, labData }) => {
  const navigate = useNavigate();
  const handleEmailClick = () => {
    navigate("/email");
  };

  console.log(user);
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
        <Grid item xs={5} md={4}>
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
        <Grid item xs={5} md={4}>
          <Button
            sx={{ width: "100%", height: "50px" }}
            variant="contained"
            onClick={() => navigate(`/study/list/${user.id}`)}
          >
            <Typography variant="h4" color={COLORS.white}>
              내 스터디 글 목록 보기
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={5} md={3}>
          <Button sx={{ width: "100%", height: "50px" }} variant="contained">
            <Typography
              variant="h4"
              color={COLORS.white}
              onClick={handleEmailClick}
            >
              이메일 목록보기
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

export default MyPage;
