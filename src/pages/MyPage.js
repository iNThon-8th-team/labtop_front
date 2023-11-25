import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import useUserStore from "../stores/LoginUser";

const ProfessorMyPage = () => {
  return <Box>ProfessorMyPage</Box>;
};

const MyPage = () => {
  const { User } = useUserStore();
  console.log(User);
  return User.isp ? <ProfessorMyPage /> : <Box>MyPage</Box>;
};

export default MyPage;
