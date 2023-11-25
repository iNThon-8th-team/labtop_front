// HomePage.js
import React, { useState } from "react";
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
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { postSearchApi, postCategoryApi } from "../api/labApi";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  const categories = [
    "경영대학",
    "문과대학",
    "생명과학",
    "정경대학",
    "이과대학",
    "공과대학",
    "의과대학",
    "사범대학",
    "간호대학",
    "정보대학",
    "국제대학",
    "보건과학",
    "디자인",
    "미디어",
    "자유전공",
    "모빌리티",
    "보안",
    "심리학부",
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleSearchSubmit = () => {
    postSearchApi(search)
      .then((res) => {
        console.log(res);

        navigate("/lab", { state: { searchresult: search } });
      })
      .catch((err) => {
        enqueueSnackbar("검색에 실패하였습니다.", {
          variant: "error",
        });
      });
  };

  const handleCategorySubmit = (category) => {
    postCategoryApi(category)
      .then((res) => {
        console.log(res);
        navigate("/lab", { state: { result: category } });
      })
      .catch((err) => {
        enqueueSnackbar("내기에 실패하였습니다.", {
          variant: "error",
        });
      });
  };

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
              value={search}
              onChange={(e) => setSearch(e.target.value)} // 'setValue' 대신 'onChange' 이벤트를 사용하여 값을 업데이트합니다.
              sx={{
                marginBottom: "10px",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={handleSearchSubmit}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Grid container spacing={1}>
              {categories.map((category, index) => (
                <Grid item key={category} xs={2}>
                  <Button
                    sx={{
                      marginTop: "4px",
                      marginBottom: "4px",
                      width: "70px",
                      height: "30px",
                      border: 1,
                      borderColor: COLORS.black,
                      color: COLORS.black,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      marginLeft: "6px", // 첫 번째 버튼을 제외하고 왼쪽 여백을 추가합니다.
                    }}
                    onClick={() => handleCategorySubmit(category)}
                  >
                    {category}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} className="firstpage_image">
          <Box sx={{ marginTop: "40px" }}>
            <img src={Professor} alt="Professor" width="340px" height="340px" />
          </Box>
        </Grid>
      </Grid>

      <Divider
        sx={{
          marginTop: "10px",
          borderColor: COLORS.backgroundGrey,
          borderWidth: 0.11,
        }}
      />

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
              onClick={() => navigate(`/lab/21`)}
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
