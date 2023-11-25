import React, { useState, useEffect } from "react";

import {
  Box,
  InputAdornment,
  TextField,
  CardHeader,
  Divider,
  CardContent,
  Typography,
  Card,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { fetchBoardPageData } from "../api/boardApi";

const BoardListPage = () => {
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
    const getBoardData = async () => {
      try {
        const boardpagedata = await fetchBoardPageData();
        console.log(boardpagedata);
        setBoardData(boardpagedata);
      } catch (error) {
        // 에러 처리
      }
    };

    getBoardData();
  }, []);
  return (
    <Box>
      <TextField
        fullWidth
        label="랩실명 혹은 교수명으로 검색하세요."
        id="fullWidth"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Card sx={{ padding: "12px" }}>
        <Box padding="5px">
          <Typography variant="h3">Announcements</Typography>
        </Box>
        {boardData?.map((board, index) => (
          <Card key={board.id} sx={{ marginBottom: 3, padding: "2px" }}>
            <CardHeader
              title={board.title}
              subheader={formatDate(board.createdAt)}
              titleTypographyProps={{
                variant: "h4",
                color: "primary.main",
              }}
              subheaderTypographyProps={{ variant: "subtitle2" }}
              action={
                <Typography
                  sx={{
                    marginTop: "24px",
                  }}
                  variant="subtitle2"
                  color="text.secondary"
                >
                  {`${board?.lab.name} 소속 ${board?.author.username}`}
                </Typography>
              }
            />
            <Divider variant="middle" />
            <CardContent padding="2px">
              <Typography variant="body1" color="text.secondary">
                {board.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Card>
    </Box>
  );
};

export default BoardListPage;
