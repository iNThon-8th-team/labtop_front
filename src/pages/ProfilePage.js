import React, { useState, useEffect } from "react";
import { Box, Button, Container, Link, Paper, Typography } from "@mui/material";
import { fetchProfileData } from "../api/profile";
import { useNavigate, navigate, useLocation } from "react-router-dom";

const PersonalInfoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const profile = location.state?.searchresult;
  console.log(profile);
  const [personalInfo, setPersonalInfo] = useState("");
  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await fetchProfileData(profile.id);
        console.log(data);
        setPersonalInfo(data);
      } catch (error) {
        // 에러 처리
      }
    };

    getProfile();
  }, [profile]);

  //   {
  //     "department": "string",
  //     "year": 0,
  //     "semester": 0,
  //     "credit": 0,
  //     "certificate": [
  //       "string"
  //     ],
  //     "award": [
  //       "string"
  //     ],
  //     "link": "string",
  //     "additional": "string"
  //   }
  // 개인 정보를 객체나 상태로 관리할 수 있습니다.

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2" gutterBottom>
          {personalInfo.name}
        </Typography>
      </Box>
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h5" gutterBottom>
          학력 : 대학생
        </Typography>
        <Typography variant="body1">대학교: 고려대학교</Typography>
        <Typography variant="body1">전공: {personalInfo.department}</Typography>
        <Typography variant="body1">재학 학년: {personalInfo.year}</Typography>
        <Typography variant="body1">학점: {personalInfo.gpa}</Typography>
      </Paper>
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h5" gutterBottom>
          자격증
        </Typography>
        {personalInfo.certificate.map((item, index) => (
          <Box key={index}>
            <Typography variant="body1">{item}</Typography>
          </Box>
        ))}
      </Paper>
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h5" gutterBottom>
          수상
        </Typography>
        {personalInfo.award.map((item, index) => (
          <Box key={index}>
            <Typography variant="body1">{item}</Typography>
          </Box>
        ))}
      </Paper>
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h5" gutterBottom>
          프로젝트
        </Typography>
        <Typography variant="body1">해커톤 대상 수상</Typography>
      </Paper>
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h5" gutterBottom>
          연락처
        </Typography>
        <Link href={personalInfo.link} target="_blank">
          블로그
        </Link>
        <Typography variant="body1"> | </Typography>
        <Link href={personalInfo.githubUrl} target="_blank">
          Github
        </Link>
      </Paper>
      <Box sx={{ textAlign: "center", my: 2 }}>
        <Button variant="contained" size="large">
          Contact
        </Button>
      </Box>
    </Container>
  );
};

export default PersonalInfoPage;
