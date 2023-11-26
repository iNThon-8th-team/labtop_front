import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getStudyList } from "../api/studyApi";
import { useNavigate, useParams } from "react-router";
import { getUserById } from "../api/userApi";
import { COLORS } from "../lib/styles/theme";
import { formatDate } from "../lib/utils/datetimeFormatter";

const StudyListPage = () => {
  const { userId } = useParams();
  const [studyList, setStudyList] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getStudyList(userId).then((res) => setStudyList(res));
    getUserById(userId).then((res) => setUser(res));
    console.log(studyList);
  }, []);

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box position="fixed" top="68px" right={15} p={2}>
        <Button
          size="large"
          variant="contained"
          onClick={() => navigate("/study/write")}
        >
          추가하기
        </Button>
      </Box>
      {studyList.length > 0 ? (
        <Box padding={3}>
          <Typography variant="h2">{user.username}의 스터디 자료</Typography>
          <Box>
            {studyList.map((study) => (
              <Box
                border={1}
                borderRadius={2}
                borderColor={COLORS.labtopPrimary}
                padding={2}
                marginY={2}
              >
                <Grid
                  container
                  item
                  key={study.id}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography variant="h3">{study.title}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{formatDate(study.createdAt)}</Typography>
                  </Grid>
                </Grid>
                {study.publication != null && (
                  <Box marginTop={1}>
                    <Typography variant="h5">
                      {study.publication.title}
                    </Typography>
                  </Box>
                )}
                <Box marginTop={1}>
                  <Typography variant="h5">{study.content}</Typography>
                </Box>
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
    </Box>
  );
};
export default StudyListPage;
