import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box mt={"20px"}>
      <Header title={"Dashboard"} subtitle={"Welcome to your dashboard"} />
    </Box>
  );
};

export default Dashboard;
