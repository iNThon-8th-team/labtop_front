import React, { useState, useEffect } from "react";

import { Box, Card, Typography } from "@mui/material";
import { COLORS } from "../lib/styles/theme";

const LabDetailPage = () => {
  return (
    <Box width="100%">
      <Card sx={{ height: "160px", padding: "20px" }}>
        <Typography variant="h2">Lab name</Typography>
        <Box></Box>
      </Card>
    </Box>
  );
};

export default LabDetailPage;
