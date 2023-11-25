import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getStudyList } from "../api/studyApi";
import { useNavigate, useParams } from "react-router";
import { getUserById } from "../api/userApi";

const StudyListPage = () => {
  const { userId } = useParams();
  const [studyList, setStudyList] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getStudyList(userId).then((res) => setStudyList(res));
    getUserById(userId).then((res) => setUser(res));
  }, []);

  return (
    <>
      <Box
        position="fixed"
        top="68px"
        right={0}
        p={2} // Adjust padding as needed
      >
        <Button
          size="large"
          variant="contained"
          onClick={() => navigate("/study/write")}
        >
          추가하기
        </Button>
      </Box>
      {studyList.length > 0 ? (
        <Box>
          <Typography variant="h2">{user.username}의 스터디 자료</Typography>
          <Box>
            {studyList.map((study) => (
              <Box key={study.id}>
                <Typography>{study.title}</Typography>
                <Typography>{study.content}</Typography>
                <Typography>{study.link}</Typography>
                <Typography>{study.createdAt}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="calc(100vh - 80px)"
        >
          <Typography variant="h2">
            {user.username}님께서 등록한 공부 자료가 없습니다.
          </Typography>
        </Box>
      )}
    </>
  );
};
export default StudyListPage;
