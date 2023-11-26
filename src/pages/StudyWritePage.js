import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { COLORS } from "../lib/styles/theme";
import { useLocation, useNavigate } from "react-router";
import { getPublicationById } from "../api/publicationApi";
import CloseIcon from "@mui/icons-material/Close";
import { postStudy } from "../api/studyApi";

const StudyWritePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const publicationId = queryParams.get("publishId");

  const [publish, setPublish] = useState({
    publication: { id: null },
    author: {},
  });

  useEffect(() => {
    if (!publicationId)
      setPublish({
        publication: { id: null },
        author: {},
      });
    else getPublicationById(publicationId).then((res) => setPublish(res));
  }, [publicationId]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted", { title, content, link, publicationId });

    postStudy(title, content, link, publicationId).then((res) => {
      navigate("/my");
    });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h2" sx={{ m: 2 }}>
        공부한 내용 작성하기
      </Typography>
      <TextField
        fullWidth
        sx={{ maxWidth: " 800px" }}
        required
        label="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {publish.publication.id && (
        <Box
          sx={{ width: "90%", maxWidth: "785px" }}
          border={1}
          borderRadius={2}
          borderColor={COLORS.labtopPrimary}
          padding={1}
          margin={1}
          bgcolor={COLORS.labtopPrimaryLight}
        >
          <Typography variant="h3" sx={{ m: 2 }} color={COLORS.labtopPrimary}>
            레퍼런스 논문
          </Typography>
          <Typography variant="h4" sx={{ m: 2 }}>
            {publish.publication.title}
          </Typography>
          <Typography variant="h4" sx={{ m: 2 }}>
            {publish.author.username}
          </Typography>
        </Box>
      )}
      <TextField
        fullWidth
        sx={{ maxWidth: " 800px" }}
        required
        label="추가 레퍼런스 주소"
        rows={4}
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <TextField
        fullWidth
        sx={{ maxWidth: " 800px" }}
        required
        label="공부한 내용"
        multiline
        minRows={5}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Box display="flex" paddingTop={2} justifyContent="center">
        <Button
          sx={{ width: "80%", minWidth: "300px", height: "50px" }}
          variant="contained"
          type="submit"
        >
          <Typography variant="h4" color={COLORS.white}>
            등록하기
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default StudyWritePage;
