import React, { useState, useEffect } from "react";
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
import { COLORS } from "../lib/styles/theme";
import { postImageUser, putUpdateUser, fetchUserData } from "../api/authApi";
import { enqueueSnackbar } from "notistack";
import useUserStore from "../stores/LoginUser";
import { useNavigate } from "react-router";

const MyPageWritePage = () => {
  const [name, setName] = useState("");
  const [introduction, setIntroduction] = useState("");

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const { User } = useUserStore();

  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserData();
        console.log(userData);
        if (userData) {
          setName(userData.username);
          setIntroduction(userData.introduction ? userData.introduction : "");
        }
      } catch (error) {
        // 에러 처리
      }
    };

    getUserData();
  }, []);

  const handleSubmit = () => {
    if (name.length < 5 || name.length > 50) {
      enqueueSnackbar("이름을 5자 이상으로 적어주세요.", {
        variant: "error",
      });
      return;
    }
    if (!introduction || introduction.length > 65000) {
      enqueueSnackbar("사용자 소개를 적어주세요.", {
        variant: "error",
      });
      return;
    }

    putUpdateUser(introduction, name);

    if (isFilePicked) {
      var data = new FormData();
      data.append("image", selectedFile);
      data.append("id", User.id);
      postImageUser(data);
    }
    navigate("/my");
  };

  return (
    <Box p={1}>
      <Typography variant="h2">사용자 정보 수정</Typography>
      <Grid container py={2}>
        <Grid container spacing={1} item alignItems="center">
          <Grid item xs="auto">
            <Typography variant="h4">이름</Typography>
          </Grid>
          <CustomInputComponent
            id="title-input"
            value={name}
            hintText="사용자 이름을 적어주세요"
            setValue={setName}
          />
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
            hintText="소개글을 적어주세요"
            setValue={setIntroduction}
            multiline={true}
          />
        </Grid>
        <Grid container spacing={1} item alignItems="start">
          <Grid item xs="auto">
            <Typography variant="h4" paddingTop={2}>
              프로필 사진
            </Typography>
          </Grid>
          <Button
            sx={{ width: "10%", height: "30px" }}
            variant="contained"
            component="label"
          >
            파일 선택
            <input type="file" hidden onChange={changeHandler} />
          </Button>
        </Grid>
      </Grid>
      <Box display="flex" paddingTop={2} justifyContent="center">
        <Button
          sx={{ width: "90%", height: "50px" }}
          variant="contained"
          onClick={handleSubmit}
        >
          <Typography variant="h4" color={COLORS.white}>
            사용자 정보 수정하기
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default MyPageWritePage;
