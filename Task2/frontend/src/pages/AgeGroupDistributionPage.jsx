import React from "react";
import AgeGroupDistributionChart from "../components/AgeGroupDistributionChart";
import Header from "../components/Header";
import { Box, Typography, Paper } from "@mui/material";

const AgeGroupDistributionPage = () => {
  return (
    <Box height="100%" maxHeight="85vh" m="1.5rem 2.5rem">
      {/* Page Header */}
      <Header
        title="AGE GROUP DISTRIBUTION"
        subtitle="Distribution of customers across different age groups"
      />

      {/* Explanation Section */}
      <Paper
        sx={{ padding: "16px", marginTop: "20px", marginBottom: "20px" }}
        elevation={3}
      >
        <Typography variant="h8">
          This chart shows how customers are distributed across various age
          groups. It provides insights into the predominant age demographics in
          our customer base, helping tailor products or services to specific age
          ranges.
        </Typography>
      </Paper>

      {/* Chart Section */}
      <Box mt="40px" height="72vh">
        <AgeGroupDistributionChart />
      </Box>
    </Box>
  );
};

export default AgeGroupDistributionPage;
