// HomePage.js
import React from "react";
import Grid from "@mui/material/Grid";
import Professor from "../img/professor.png";
import oneki from "../img/oneki.png";
import PhysicalComputing from "../img/physicalcomputing.png";
import CVLAB from "../img/CVLAB.png";
import { styled } from "@mui/material/styles";
import { Box, Button, Divider, Typography } from "@mui/material";
import { COLORS } from "../lib/styles/theme";
import { Block } from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

function HomePage() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              marginTop: "70px",
              marginLeft: "100px",
              marginBottom: "18px",
            }}
          >
            <Typography variant="h1">Find the top lab in Labtop</Typography>
          </Box>
          <Box
            sx={{
              marginLeft: "140px",
              marginBottom: "8px",
            }}
          >
            자신에게 맞는 최고의 랩실을 찾으세요
          </Box>
          <Box
            sx={{
              marginLeft: "140px",
              marginBottom: "8px",
            }}
          >
            laptop은 교수&학부생간의 커뮤니티입니다.
          </Box>
          <Box
            sx={{
              marginLeft: "140px",
              marginBottom: "8px",
            }}
          >
            학부생은 랩실 정보를, 교수는 대학원생을 구할 수 있어요.
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "70%",
              marginLeft: "100px",
              marginTop: "20px",
            }}
          >
            <TextField
              fullWidth
              label="랩실명 혹은 교수명으로 검색하세요."
              id="fullWidth"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Grid container spacing={3}>
              <Button
                sx={{
                  marginTop: "40px",
                  width: "84px",
                  height: "30px",
                  border: 1, // 테두리 두께를 지정
                  borderColor: COLORS.black, // 테두리 색상 지정
                  color: COLORS.black,
                  borderRadius: "10px", // 둥근 모서리의 반경을 지정
                  display: "flex",
                  alignItems: "center", // 수직 중앙 정렬
                  justifyContent: "center", // 수평 중앙 정렬
                  fontSize: "14px",
                  marginLeft: "37px",
                }}
              >
                컴퓨터공학
              </Button>

              <Button
                sx={{
                  marginTop: "40px",
                  width: "84px",
                  height: "30px",
                  border: 1, // 테두리 두께를 지정
                  borderColor: COLORS.black, // 테두리 색상 지정
                  color: COLORS.black,
                  borderRadius: "10px", // 둥근 모서리의 반경을 지정
                  display: "flex",
                  alignItems: "center", // 수직 중앙 정렬
                  justifyContent: "center", // 수평 중앙 정렬
                  fontSize: "14px",
                  marginLeft: "10px",
                }}
              >
                생명공학
              </Button>

              <Button
                sx={{
                  marginTop: "40px",
                  width: "84px",
                  height: "30px",
                  border: 1, // 테두리 두께를 지정
                  borderColor: COLORS.black, // 테두리 색상 지정
                  color: COLORS.black,
                  borderRadius: "10px", // 둥근 모서리의 반경을 지정
                  display: "flex",
                  alignItems: "center", // 수직 중앙 정렬
                  justifyContent: "center", // 수평 중앙 정렬
                  fontSize: "14px",
                  marginLeft: "10px",
                }}
              >
                화학공학
              </Button>

              <Button
                sx={{
                  marginTop: "40px",
                  width: "84px",
                  height: "30px",
                  border: 1, // 테두리 두께를 지정
                  borderColor: COLORS.black, // 테두리 색상 지정
                  color: COLORS.black,
                  borderRadius: "10px", // 둥근 모서리의 반경을 지정
                  display: "flex",
                  alignItems: "center", // 수직 중앙 정렬
                  justifyContent: "center", // 수평 중앙 정렬
                  fontSize: "14px",
                  marginLeft: "10px",
                }}
              >
                기계공학
              </Button>

              <Button
                sx={{
                  marginTop: "40px",
                  width: "84px",
                  height: "30px",
                  border: 1, // 테두리 두께를 지정
                  borderColor: COLORS.black, // 테두리 색상 지정
                  color: COLORS.black,
                  borderRadius: "10px", // 둥근 모서리의 반경을 지정
                  display: "flex",
                  alignItems: "center", // 수직 중앙 정렬
                  justifyContent: "center", // 수평 중앙 정렬
                  fontSize: "14px",
                  marginLeft: "10px",
                }}
              >
                인공지능
              </Button>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} className="firstpage_image">
          <Box sx={{ marginTop: "40px" }}>
            <img src={Professor} alt="Professor" width="340px" height="340px" />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: COLORS.backgroundGrey, borderWidth: 0.11 }} />

      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Typography variant="h2">현재 모집중인 랩실이에요</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Item
              sx={{
                height: "140px",
              }}
            >
              <img src={oneki} alt="oneki" width="360px" height="100px" />
              <Typography variant="h4">정원기 교수</Typography>
            </Item>
          </Grid>
          <Grid item xs>
            <Item
              sx={{
                height: "140px",
              }}
            >
              <img src={CVLAB} alt="CVLAB" width="360px" height="100px" />
              <Typography variant="h4">김승룡 교수</Typography>
            </Item>
          </Grid>
          <Grid item xs>
            <Item
              sx={{
                height: "140px",
              }}
            >
              <img
                src={PhysicalComputing}
                alt="PhysicalComputing"
                width="360px"
                height="100px"
              />

              <Typography variant="h4">이재훈 교수</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HomePage;
