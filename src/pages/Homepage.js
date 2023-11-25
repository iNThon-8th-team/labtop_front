// HomePage.js
import React from 'react';
import Grid from '@mui/material/Grid';
import Professor from '../img/professor.png'
import { Box, Divider, Typography } from '@mui/material';
function HomePage() {
  return (
    <Box sx={{width:"100%"}}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={7}>
        <Box sx ={{
          marginTop:"150px",
          marginLeft :"100px",
          marginBottom : "18px",
        }}>
          <Typography variant='h1'>Find the top lab in Labtop</Typography>
        </Box>
          <Box sx = {{
            marginLeft:"140px",
            marginBottom:"8px",
          }}>
          자신에게 맞는 최고의 랩실을 찾으세요
          </Box>
          <Box sx = {{
            marginLeft:"140px",
            marginBottom:"8px",
          }}>
          laptop은 교수&학부생간의 커뮤니티입니다.
          </Box>
          <Box sx = {{
            marginLeft:"140px",
            marginBottom:"8px",
          }}>
          학부생은 랩실 정보를, 교수는 대학원생을 구할 수 있어요.
          </Box>
        
      </Grid>
      <Grid item xs={12} md={5} className='firstpage_image'>
       <Box sx={{marginTop:"40px",}}><img src={Professor} alt="Professor" width="340px" height="340px"/></Box>
      </Grid>
      <Divider/>
    </Grid>
    </Box>
  );
}

export default HomePage;
