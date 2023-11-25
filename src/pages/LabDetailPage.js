import React, { useState, useEffect } from "react";

import { Box, Card, Container, Typography } from "@mui/material";
import { COLORS } from "../lib/styles/theme";
import { Image } from "@mui/icons-material";

const LabDetailPage = () => {
  return (
    <Box width="100%">
      <Card sx={{ padding: "20px" }}>
        {/* <Image /> */}
        <Typography variant="h2">Lab name</Typography>

        <Box padding="5px">
          <Typography variant="h3">Introduce</Typography>
          <Typography>
            'Welcome to Phyical Computing Lab., in the Department of Computer
            and Radio Communication Engineering at the Korea University. The
            research in our group is focused on physical computing. This
            includes the study of theory and applications based on electrical
            engineering and computer science. In particular, our group is
            interested in 1. Electronics design using 3D printer 2. Internet of
            things using open source hardware such as Arduino, Raspberry Pi, and
            other embedded hardware 3. Communication systems based on software
            defined radio 4. High speed interconnection'
          </Typography>
        </Box>

        <Box padding="5px">
          <Typography variant="h3">Group</Typography>
          <Box padding="5px">
            <Typography variant="h4">Professor</Typography>
            <Typography variant="h4">Graduate Students</Typography>
            <Typography variant="h4">Alumni</Typography>
          </Box>
        </Box>
        <Box padding="5px">
          <Typography variant="h3">Research</Typography>
        </Box>
        <Box padding="5px">
          <Typography variant="h3">Projects</Typography>
        </Box>
        <Box padding="5px">
          <Typography variant="h3">Publications</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default LabDetailPage;
