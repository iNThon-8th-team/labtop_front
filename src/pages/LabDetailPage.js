import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  Divider,
  Typography,
  Button,
  CardContent,
  CardHeader,
} from "@mui/material";
import { COLORS } from "../lib/styles/theme";
import { Image } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { fetchLabData } from "../api/labApi";
import { fetchBoardData } from "../api/boardApi";

const LabDetailPage = () => {
  const { labId } = useParams();
  const [labData, setLabData] = useState(null);
  const [boardData, setBoardData] = useState(null);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat("ko-KR", options).format(
      new Date(dateString)
    );
  };

  useEffect(() => {
    const getLabData = async () => {
      try {
        const data = await fetchLabData(labId);
        const boarddata = await fetchBoardData(labId);
        console.log(data);
        console.log(boarddata);
        setLabData(data); // 상태를 업데이트합니다.
        setBoardData(boarddata);
      } catch (error) {
        // 에러 처리
      }
    };

    getLabData();
  }, []);

  return (
    <Box width="100%">
      <Card sx={{ padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h2">{labData?.name}</Typography>

          <Box>
            <Button
              variant={labData?.isSubscribed ? "contained" : "outlined"}
              sx={{ marginLeft: "10px" }}
            >
              Subscribe
            </Button>
            <Button variant="contained" sx={{ marginLeft: "10px" }}>
              Contact
            </Button>
          </Box>
        </Box>

        <Divider
          sx={{
            marginTop: "10px",
            borderColor: COLORS.backgroundGrey,
            borderWidth: 0.11,
          }}
        />
        <Box padding="5px">
          <Typography variant="h3">Introduce</Typography>
          <Typography>
            {labData && labData.introduction
              ? labData.introduction
              : "Welcome to Phyical Computing Lab., in the Department of Computer and Radio Communication Engineering at the Korea University. The research in our group is focused on physical computing. This includes the study of theory and applications based on electrical engineering and computer science. In particular, our group is interested in 1. Electronics design using 3D printer 2. Internet of things using open source hardware such as Arduino, Raspberry Pi, and other embedded hardware 3. Communication systems based on software defined radio 4. High speed interconnection"}
          </Typography>
        </Box>
        <Divider
          sx={{
            marginTop: "10px",
            borderColor: COLORS.backgroundGrey,
            borderWidth: 0.11,
          }}
        />
        <Box padding="5px">
          <Typography variant="h3">Group</Typography>
          <Box padding="5px">
            <Typography
              sx={{
                marginBottom: "4px",
                fontSize: "25px",
              }}
            >
              Professor
            </Typography>

            <Box
              sx={{
                marginLeft: "15px",
                marginBottom: "4px",
              }}
            >
              {labData?.professor.username}
            </Box>
            <Box
              sx={{
                marginLeft: "15px",
                marginBottom: "4px",
              }}
            >
              {labData?.professor.email}
            </Box>
            <Typography
              sx={{
                marginBottom: "4px",
                fontSize: "25px",
              }}
            >
              Researchers
            </Typography>
            <Box
              sx={{
                marginLeft: "15px",
                marginBottom: "4px",
              }}
            >
              {labData?.researchers.map((person) => (
                <Box key={person.id}>
                  {" "}
                  {/* 또는 고유한 식별자를 key로 사용하세요 */}
                  <Box marginBottom="4px">이름:{person.username}</Box>
                  <Box>email: {person.email}</Box>
                </Box>
              ))}
            </Box>

            {/* <Typography variant="h4">Alumni</Typography> */}
          </Box>
        </Box>
        {/* <Box padding="5px">
          <Typography variant="h3">Research</Typography>
        </Box>
        <Box padding="5px">
          <Typography variant="h3">Projects</Typography>
        </Box>
        <Box padding="5px">
          <Typography variant="h3">Publications</Typography>
        </Box> */}
      </Card>
      <Box
        sx={{
          height: "20px",
        }}
      ></Box>
      <Card sx={{ padding: "10px" }}>
        <Box padding="5px">
          <Typography variant="h3">Announcements</Typography>
        </Box>
        {boardData?.map(
          (board, index) =>
            board.isNotice && (
              <Card key={board.id} sx={{ marginBottom: 3 }}>
                <CardHeader
                  title={board.title}
                  subheader={formatDate(board.createdAt)}
                  titleTypographyProps={{
                    variant: "h4",
                    color: "primary.main",
                  }}
                  subheaderTypographyProps={{ variant: "subtitle2" }}
                />
                <Divider variant="middle" />
                <CardContent padding="2px">
                  <Typography variant="body1" color="text.secondary">
                    {board.content}
                  </Typography>
                </CardContent>
              </Card>
            )
        )}
      </Card>
    </Box>
  );
};

export default LabDetailPage;
