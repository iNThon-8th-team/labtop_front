import React from "react";
import { Box, Button, Container, Link, Paper, Typography } from "@mui/material";
import useUserStore from "../stores/LoginUser";

const PersonalInfoPage = () => {
  const { User } = useUserStore();

  //   {department: '컴퓨터학과', year: '2', semester: '2', credit: '2.0', certificate: Array(4), …}
  // additional
  // :
  // "txxnrd.github.io"
  // award
  // :
  // ['해커톤1등예정']
  // certificate
  // :
  // (4) ['인공지능', '삶', '감정', '죽음']
  // credit
  // :
  // "2.0"
  // department
  // :
  // "컴퓨터학과"
  // link
  // :
  // "txxnrd.github.io"
  // semester
  // :
  // "2"
  // year
  // :
  // "2"
  // 개인 정보를 객체나 상태로 관리할 수 있습니다.
  const personalInfo = {
    name: User.name,
    // university: department,
    email: User.email,
    major: "컴퓨터공학",
    education: "4 학년 1 학기",
    gpa: "4.1 / 4.5",
    career: [
      {
        name: "경희대학교 연구실",
        position: "연구원",
        description:
          "딥러닝 및 영상 처리 기법을 활용한 신시장 개척 프로젝트 연구",
      },
      // ... 추가 경력 정보
    ],
    projects: "프로젝트 정보 없음",
    blogUrl: "https://blog.naver.com/gildong",
    githubUrl: "https://github.com/honggildong",
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2" gutterBottom>
          {personalInfo.name}
        </Typography>
      </Box>
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h5" gutterBottom>
          학력
        </Typography>
        <Typography variant="body1">
          대학교: {personalInfo.university}
        </Typography>
        <Typography variant="body1">전공: {personalInfo.major}</Typography>
        <Typography variant="body1">
          재학 학년: {personalInfo.education}
        </Typography>
        <Typography variant="body1">학점: {personalInfo.gpa}</Typography>
      </Paper>
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h5" gutterBottom>
          경력
        </Typography>
        {personalInfo.career.map((item, index) => (
          <Box key={index}>
            <Typography variant="body1">
              {item.name} - {item.position}
            </Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Box>
        ))}
      </Paper>
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h5" gutterBottom>
          프로젝트
        </Typography>
        <Typography variant="body1">{personalInfo.projects}</Typography>
      </Paper>
      <Paper sx={{ p: 2, my: 2 }}>
        <Typography variant="h5" gutterBottom>
          연락처
        </Typography>
        <Link href={personalInfo.blogUrl} target="_blank">
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
