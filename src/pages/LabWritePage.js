import React, { useState, useEffect } from "react";
import CustomInputComponent from "../components/CustomInputComponent";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const LabWritePage = () => {
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [category, setCategory] = useState("");
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
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
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
    </Box>
  );
};

export default LabWritePage;
