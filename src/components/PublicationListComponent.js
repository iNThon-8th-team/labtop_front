import {
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  Box,
  Avatar,
} from "@mui/material";
import React from "react";
import { COLORS } from "../lib/styles/theme";
import ArticleIcon from "@mui/icons-material/Article";

const PublicationListComponent = ({ publicationsWithAuthor }) => {
  const { author, publications } = publicationsWithAuthor;
  return (
    <Box
      height={"300px"}
      width={"300px"}
      margin={"20px"}
      border={2}
      borderColor={COLORS.backgroundGrey}
      borderRadius={3}
    >
      <Box
        flexDirection={"column"}
        display={"flex"}
        alignItems={"center"}
        margin={"10px"}
      >
        <Avatar
          sx={{
            bgcolor: COLORS.labtopPrimary,
            width: "50px",
            height: "50px",
          }}
        >
          {author.username[0]}
        </Avatar>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          aria-label="contacts"
        >
          {publications
            ? publications.map((publication, index) => (
                <ListItem disablePadding key={index}>
                  <ListItemButton>
                    <ListItemText primary={publication.title} />
                    <ArticleIcon fontSize="large" />
                  </ListItemButton>
                </ListItem>
              ))
            : null}
        </List>
      </Box>
    </Box>
  );
};

export default PublicationListComponent;
