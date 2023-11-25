import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/LoginUser";
import useNavBarStore from "../stores/NavBarStore";
import AlertDialogComponent from "./AlertDialogComponent";
import { postLogoutApiAuth } from "../api/authApi";
import { AUTH_TOKEN_NAME } from "../api/axios";
import { navBarEnum } from "../models/navBarEnum";
import { COLORS } from "../lib/styles/theme";
import { enqueueSnackbar } from "notistack";

const NavBar = () => {
  const navigate = useNavigate();
  const { isLogin, logoutUser, User } = useUserStore();
  const { NavBarSelection, changeSelection } = useNavBarStore();

  const [logoutAlert, setLogoutAlert] = useState(false);

  const NavBarButton = (props) => {
    return (
      <Button
        sx={{
          color:
            NavBarSelection === props.navBarEnumType
              ? COLORS.labtopPrimary
              : COLORS.textDefault,
          fontWeight: "bold",
        }}
        onClick={() => {
          changeSelection(props.navBarEnumType);
          navigate(props.navLink);
        }}
      >
        {props.buttonName}
      </Button>
    );
  };

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: COLORS.white }}>
        <Toolbar>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography
              fontSize={36}
              fontWeight="bold"
              color={COLORS.labtopPrimary}
              onClick={() => {
                navigate("/");
                changeSelection(navBarEnum.LABLIST);
              }}
              sx={{ ":hover": { cursor: "pointer" } }}
            >
              Labtop
            </Typography>

            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                marginLeft: "1rem",
              }}
            >
              <NavBarButton
                navBarEnumType={navBarEnum.LABLIST}
                navLink={"/lab"}
                buttonName={"연구실 목록"}
              />
            </Box>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                marginLeft: "1rem",
              }}
            >
              <NavBarButton
                navBarEnumType={navBarEnum.BOARD}
                navLink={"/board"}
                buttonName={"게시판"}
              />
            </Box>
          </Box>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              position: "absolute",
              right: "10px",
              float: "right",
            }}
          >
            <Typography marginRight={"10px"}>{User.usename}</Typography>
            {isLogin ? (
              <Box>
                <NavBarButton
                  navBarEnumType={navBarEnum.MYPAGE}
                  navLink={"/my"}
                  buttonName={"마이페이지"}
                />
                <Button
                  sx={{
                    color:
                      NavBarSelection === navBarEnum.LOGOUT
                        ? COLORS.labtopPrimary
                        : COLORS.textDefault,
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    changeSelection(navBarEnum.LOGOUT);
                    setLogoutAlert(true);
                  }}
                >
                  로그아웃
                </Button>
              </Box>
            ) : (
              <Box>
                <NavBarButton
                  navBarEnumType={navBarEnum.SIGNUP}
                  navLink={"/auth/signup"}
                  buttonName={"회원가입"}
                />
                <NavBarButton
                  navBarEnumType={navBarEnum.LOGIN}
                  navLink={"/auth/login"}
                  buttonName={"로그인"}
                />
              </Box>
            )}
          </Box>
          <AlertDialogComponent
            message={"로그아웃하시겠습니까?"}
            open={logoutAlert}
            setOpen={setLogoutAlert}
            action={() => {
              localStorage.removeItem(AUTH_TOKEN_NAME);
              logoutUser();
              enqueueSnackbar("로그아웃 완료", {
                variant: "success",
              });
            }}
          />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavBar;
