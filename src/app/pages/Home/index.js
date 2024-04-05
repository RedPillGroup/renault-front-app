import { Box, Grid } from "@mui/material";
import React from "react";
import CustomImageList from "./media";
import Chat from "./Chat";

const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }} > 
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Chat /> 
          </Grid>
          <Grid item xs={6}>
            <CustomImageList />
          </Grid>
        </Grid>
      </Box>
  
    );
};

export default Home;
