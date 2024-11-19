import React from "react";
import GenderDistributionChart from "../components/GenderDistributionChart";
import Header from "../components/Header";
import { Box, Typography, Paper } from "@mui/material";

const GenderDistributionPage = () => {
  return (
    <Box height="100%" maxHeight="85vh" m="1.5rem 2.5rem">
      <Header
        title="GENDER DISTRIBUTION"
        subtitle="Analyze the gender demographics of customers"
      />
      <Paper
        sx={{ padding: "16px", marginTop: "20px", marginBottom: "20px" }}
        elevation={3}
      >
        <Typography variant="h8">
          This chart illustrates the gender distribution of customers, providing
          insights into gender-specific trends and behaviors. It helps
          businesses design gender-focused marketing strategies and offerings.
        </Typography>
      </Paper>
      <Box mt="40px" height="72vh">
        <GenderDistributionChart />
      </Box>
    </Box>
  );
};

export default GenderDistributionPage;
