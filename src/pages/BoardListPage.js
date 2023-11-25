import React, { useState, useEffect } from "react";

import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const BoardListPage = () => {
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
    </Box>
  );
};

export default BoardListPage;
