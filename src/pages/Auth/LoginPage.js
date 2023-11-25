import { Box, Button, Card, Typography, Grid, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthInputComponent from "./AuthInputComponent";
import { postLoginApiAuth } from "../../api/authApi";
import useUserStore from "../../stores/LoginUser";
import { AUTH_TOKEN_NAME } from "../../api/axios";
import { enqueueSnackbar } from "notistack";
import useNavBarStore from "../../stores/NavBarStore";
import { COLORS } from "../../lib/styles/theme";
import { navBarEnum } from "../../models/navBarEnum";

const LoginPage = () => {
  const { loginUser } = useUserStore();
  const { changeSelection } = useNavBarStore();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("remember");
    if (savedEmail) {
      setEmail(savedEmail);
      setRemember(true);
    }
  }, []);

  const handleSubmit = () => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (!emailRegex.test(email)) {
      enqueueSnackbar("올바른 이메일 형식이 아닙니다.", {
        variant: "error",
      });
      return;
    }

    postLoginApiAuth(email, password)
      .then((res) => {
        console.log(res);
        changeSelection(navBarEnum.DEFAULT);
        loginUser({
          id: res.id,
          email: res.email,
          username: res.username,
          isProfessor: res.isProfessor,
          isResearcher: res.isResearcher,
        });
        localStorage.setItem(AUTH_TOKEN_NAME, res.accessToken);
        if (remember) localStorage.setItem("remember", email);
        else localStorage.removeItem("remember");
        enqueueSnackbar("로그인에 성공하였습니다.", {
          variant: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        enqueueSnackbar("로그인에 실패하였습니다.", {
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
                로그인
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
                  <AuthInputComponent
                    value={email}
                    label={"이메일"}
                    setValue={setEmail}
                  />
                  <AuthInputComponent
                    value={password}
                    label={"비밀번호"}
                    isSecret={true}
                    setValue={setPassword}
                    handleSubmit={handleSubmit}
                  />
                  <Box
                    flexDirection={"row"}
                    display={"flex"}
                    alignItems={"center"}
                    onClick={() => {
                      setRemember(!remember);
                    }}
                    sx={{ ":hover": { cursor: "pointer" }, paddingX: "10px" }}
                  >
                    <Checkbox checked={remember} sx={{ marginLeft: "5px" }} />
                    <Typography>Remeber Email</Typography>
                  </Box>
                  <Grid item marginBottom={"10px"}>
                    <Button
                      variant="contained"
                      sx={{ paddingY: "10px" }}
                      fullWidth
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      <Typography variant="h5">로그인하기</Typography>
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
                      이직 회원이 아니신가요?
                    </Typography>
                    <Typography
                      fontSize={"14px"}
                      color={COLORS.labtopPrimary}
                      onClick={() => {
                        changeSelection(navBarEnum.SIGNUP);
                        navigate("/auth/signup");
                      }}
                      sx={{
                        ":hover": { cursor: "pointer" },
                        marginLeft: "10px",
                      }}
                    >
                      회원가입 하러 가기
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

export default LoginPage;
