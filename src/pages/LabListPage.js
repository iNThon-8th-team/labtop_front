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
import { useNavigate, useLocation } from "react-router-dom";

import { labCategories } from "../models/labCategories";


const LabListPage = () => {
  const [search, setSearch] = useState("");

  const [categoryresult, setcategoryresult] = useState();
  const [searchresult, setsearchresult] = useState();

  const location = useLocation();
  const navigate = useNavigate();

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
  const category = location.state?.result;

  useEffect(() => {
    if (category != null) {
      handleCategorySubmit(category);
    }
  }, [category]); // category 값이 변경될 때마다 이 effect가 실행됩니다.

  const handleSearchSubmit = () => {
    postSearchApi(search)
      .then((res) => {
        console.log(res);
        setsearchresult(res);
      })
      .catch((err) => {
        enqueueSnackbar("검색에 실패하였습니다.", {
          variant: "error",
        });
      });
  };
  const handleSearchBeforeSubmit = () => {
    postSearchApi(searchfrombefore)
      .then((res) => {
        console.log(res);
        setsearchresult(res);
      })
      .catch((err) => {
        enqueueSnackbar("검색에 실패하였습니다.", {
          variant: "error",
        });
      });
  };
  const searchfrombefore = location.state?.searchresult;

  useEffect(() => {
    if (searchfrombefore != null) {
      handleSearchBeforeSubmit(searchfrombefore);
    }
  }, [searchfrombefore]); // category 값이 변경될 때마다 이 effect가 실행됩니다.

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box>
      <Box alignItems="center" justifyContent="center" display="flex">
        <TextField
          label="랩실명 혹은 교수명으로 검색하세요."
          id="fullWidth"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // 'setValue' 대신 'onChange' 이벤트를 사용하여 값을 업데이트합니다.
          sx={{
            width: "70%",
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
          {(categoryresult?.length > 0 ? categoryresult : searchresult)?.map(
            (lab) => (
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
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default LabListPage;
