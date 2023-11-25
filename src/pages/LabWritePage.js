import React, { useState } from "react";
import CustomInputComponent from "../components/CustomInputComponent";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { labCategories } from "../models/labCategories";
import { COLORS } from "../lib/styles/theme";
import { postLabApi, putLabApi } from "../api/labApi";
import { enqueueSnackbar } from "notistack";

const LabWritePage = () => {
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [category, setCategory] = useState("");

  const lab = undefined;
  const handleSubmit = () => {
    if (name.length < 5 || name.length > 255) {
      enqueueSnackbar("연구실 이름을 5자 이상으로 적어주세요.", {
        variant: "error",
      });
      return;
    }
    if (!introduction || introduction.length > 65000) {
      enqueueSnackbar("연구실 소개를 적어주세요.", {
        variant: "error",
      });
      return;
    }
    if (!category) {
      enqueueSnackbar("연구실 소속을 선택해주세요.", {
        variant: "error",
      });
      return;
    }

    if (lab) {
      putLabApi(lab.id, name, introduction, category);
    } else {
      postLabApi(name, introduction, category);
    }
  };

  return (
    <Box p={1}>
      <Typography variant="h2">랩실 정보 수정</Typography>
      <Grid container py={2}>
        <Grid container spacing={1} item alignItems="center">
          <Grid item xs="auto">
            <Typography variant="h4">이름</Typography>
          </Grid>
          <CustomInputComponent
            id="title-input"
            value={name}
            hintText="랩실 이름을 적어주세요"
            setValue={setName}
          />
        </Grid>
        <Grid container spacing={1} item alignItems="center">
          <Grid item xs="auto">
            <Typography variant="h4">소속</Typography>
          </Grid>
          <Grid item margin={"5px"} xs>
            <FormControl fullWidth>
              <Select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                displayEmpty
                size="small"
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="" disabled>
                  <em>소속 선택</em>
                </MenuItem>
                {labCategories.map((category, index) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={1} item alignItems="start">
          <Grid item xs="auto">
            <Typography variant="h4" paddingTop={2}>
              소개
            </Typography>
          </Grid>
          <CustomInputComponent
            id="introduction-input"
            value={introduction}
            hintText="연구실 소개글을 적어주세요"
            setValue={setIntroduction}
            multiline={true}
          />
        </Grid>
      </Grid>
      <Box display="flex" paddingTop={2} justifyContent="center">
        <Button
          sx={{ width: "90%", height: "50px" }}
          variant="contained"
          onClick={handleSubmit}
        >
          <Typography variant="h4" color={COLORS.white}>
            연구실 정보 등록하기
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default LabWritePage;
