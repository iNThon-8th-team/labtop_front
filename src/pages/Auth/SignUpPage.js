import React from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthInputComponent from "./AuthInputComponent";
import { postRegisterApiAuth } from "../../api/authApi";
import { enqueueSnackbar } from "notistack";
import { COLORS } from "../../lib/styles/theme";
import useNavBarStore from "../../stores/NavBarStore";
import { navBarEnum } from "../../models/navBarEnum";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { changeSelection } = useNavBarStore();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isProf, setIsProf] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = () => {
    if (username.length < 3 || username.length > 20) {
      enqueueSnackbar("2자 이상 20자 이하의 이름을 사용해주세요.", {
        variant: "warning",
      });
      return;
    }
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!emailRegex.test(email)) {
      enqueueSnackbar("올바른 이메일 형식이 아닙니다.", {
        variant: "warning",
      });
      return;
    }

    const passwordRegxp = /(?=.*[0-9])(?=.*[a-zA-Z]).{8,16}$/;
    if (!passwordRegxp.test(password)) {
      enqueueSnackbar("비밀번호는 8~16자 영문 대 소문자, 숫자를 사용하세요.", {
        variant: "warning",
      });
      return;
    }
    if (password !== checkPassword) {
      enqueueSnackbar("비밀번호가 일치하지 않습니다.", {
        variant: "warning",
      });
      return;
    }

    postRegisterApiAuth(email, password, username, isProf)
      .then((res) => {
        localStorage.setItem("remember", email);
        enqueueSnackbar("회원가입에 성공하였습니다.", {
          variant: "success",
        });
        navigate("/auth/login");
      })
      .catch((err) => {
        enqueueSnackbar("회원가입에 실패하였습니다.", {
          variant: "error",
        });
      });
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item>
        <Card sx={{ p: "2rem" }}>
          <Grid container spacing={3} direction="column" alignItems="center">
            <Grid item>
              <Typography
                variant="h4"
                fontWeight={"bold"}
                marginBottom={"30px"}
              >
                회원가입
              </Typography>
            </Grid>
            <Grid item>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                minWidth="280px"
                maxWidth={"359px"}
                width={"80vw"}
              >
                <Grid container spacing={2} direction="column">
                  <RadioGroup
                    row
                    defaultValue="prof"
                    onChange={(e, value) => {
                      setIsProf(value === "prof");
                    }}
                  >
                    <FormLabel
                      style={{
                        color: COLORS.black,
                        paddingLeft: 20,
                        paddingRight: 20,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      회원 유형
                    </FormLabel>
                    <FormControlLabel
                      value="prof"
                      control={<Radio />}
                      label="교수"
                    />
                    <FormControlLabel
                      value="student"
                      control={<Radio />}
                      label="학생"
                    />
                  </RadioGroup>

                  <AuthInputComponent
                    value={email}
                    label={"이메일"}
                    setValue={setEmail}
                  />
                  <AuthInputComponent
                    value={username}
                    label={"이름"}
                    setValue={setUsername}
                  />

                  <AuthInputComponent
                    value={password}
                    label={"비밀번호"}
                    isSecret={true}
                    setValue={setPassword}
                    handleSubmit={handleSubmit}
                  />
                  <AuthInputComponent
                    value={checkPassword}
                    label={"비밀번호 확인"}
                    isSecret={true}
                    setValue={setCheckPassword}
                    handleSubmit={handleSubmit}
                  />
                  <Grid item margin={"10px"}>
                    <Button
                      variant="contained"
                      sx={{ paddingY: "10px" }}
                      fullWidth
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      <Typography variant="h5">회원가입하기</Typography>
                    </Button>
                  </Grid>
                  <Box
                    flexDirection={"row"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    margin={"10px"}
                    onClick={() => {
                      setRemember(!remember);
                    }}
                    sx={{ ":hover": { cursor: "pointer" } }}
                  >
                    <Typography fontSize={"14px"}>
                      이미 회원이신가요?
                    </Typography>
                    <Typography
                      fontSize={"14px"}
                      color={COLORS.labtopPrimary}
                      onClick={() => {
                        changeSelection(navBarEnum.LOGIN);
                        navigate("/auth/login");
                      }}
                      sx={{
                        ":hover": { cursor: "pointer" },
                        marginLeft: "10px",
                      }}
                    >
                      로그인 하러 가기
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
