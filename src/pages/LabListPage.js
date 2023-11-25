import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import informatics from "../img/informatics.png";
import { styled } from "@mui/material/styles";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import { COLORS } from "../lib/styles/theme";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { postCategoryApi } from "../api/labApi";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { labCategories } from "../models/labCategories";

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
        enqueueSnackbar("결과 검색에 실패하였습니다.", {
          variant: "error",
        });
      });
  };

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
          width: "65%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
        }}
      >
        <Grid container spacing={1}>
          {labCategories.map((category, index) => (
            <Grid item key={category}>
              <Chip
                size="medium"
                variant="outlined"
                label={category}
                sx={{
                  borderRadius: "10px",
                  borderColor: COLORS.black,
                  fontSize: 14,
                }}
                onClick={() => handleCategorySubmit(category)}
              />
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
            <Grid
              item
              xs
              key={lab.name}
              onClick={() => navigate(`/lab/${lab.id}`)}
            >
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
