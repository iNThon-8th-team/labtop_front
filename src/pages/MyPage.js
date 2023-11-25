import React from "react";
import PLRG from "../img/PLRG.png";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import useUserStore from "../stores/LoginUser";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BiotechIcon from "@mui/icons-material/Biotech";
import LanguageIcon from "@mui/icons-material/Language";
import CollectionsBookmarkOutlinedIcon from "@mui/icons-material/CollectionsBookmarkOutlined";
import { COLORS } from "../lib/styles/theme";
import { useNavigate } from "react-router-dom";

const ProfessorMyPage = ({ user }) => {
  const navigate = useNavigate();
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
          <Button sx={{ width: "100%", height: "50px" }} variant="contained">
            <Typography variant="h4" color={COLORS.white}>
              새 논문 등록하기
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const UserMyPage = ({ user }) => {
  const navigate = useNavigate();
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
    </Grid>
  );
};

const MyPage = () => {
  const { User } = useUserStore();
  return User.isProfessor ? (
    <ProfessorMyPage user={User} />
  ) : (
    <UserMyPage user={User} />
  );
};

export default MyPage;
