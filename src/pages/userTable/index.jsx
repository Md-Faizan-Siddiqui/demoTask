import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Table from "../../component/table";

const UserTable = () => {
  return (
    <Box >
      <Grid
        sx={{
          // background: "rgba(225,225,225, 0.2);",
          padding: "0px",
          mt: { md: "25px", sm: "25px", xs: "80px" },
          p: "30px",
        }}
      >
        <Typography
          sx={{
            color: "#333",
            fontFamily: "Noto Sans",
            fontSize: "23px",
            fontWeight: "400",
          }}
        >
          User Table
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          p: "20px",
          background: "#fff",
        }}
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Table />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserTable;
