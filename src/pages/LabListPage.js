import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Professor from "../img/professor.png";
import informatics from "../img/informatics.png";
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

const LabListPage = () => {
  const [categoryresult, setcategoryresult] = useState();
  const navigate = useNavigate();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleCategorySubmit = (category) => {
    postCategoryApi(category)
      .then((res) => {
        console.log(res);
        setcategoryresult(res);
      })
      .catch((err) => {
        enqueueSnackbar("내기에 실패하였습니다.", {
          variant: "error",
        });
      });
  };

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

  return (
    <Box>
      <Box alignItems="center" justifyContent="center" display="flex">
        <TextField
          label="랩실명 혹은 교수명으로 검색하세요."
          id="fullWidth"
          sx={{
            width: "70%",
            marginBottom: "10px",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          width: "60%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
        }}
      >
        <Grid container spacing={1}>
          {categories.map((category, index) => (
            <Grid item key={category} xs={1.3}>
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
      <Divider
        sx={{
          marginTop: "10px",
          borderColor: COLORS.backgroundGrey,
          borderWidth: 0.11,
        }}
      />
      <Box sx={{ marginTop: "20px", marginLeft: "50px", marginRight: "50px" }}>
        <Grid container spacing={3}>
          {categoryresult?.map((lab) => (
            <Grid item xs key={lab.name}>
              <Item>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-around"
                  sx={{ height: "180px" }}
                >
                  <Grid item>
                    <img
                      src={informatics}
                      alt={lab.name}
                      width="300px"
                      height="100px"
                    />
                  </Grid>
                  <Grid item paddingX={0.5}>
                    <Typography
                      variant="h3"
                      maxHeight={"50px"}
                      overflow="hidden"
                    >
                      {lab.name}
                    </Typography>
                    <Box height="2px" />
                    <Typography variant="h4">
                      {lab.professor.username}교수
                    </Typography>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LabListPage;
