import React from "react";
import IncomeDistributionByDivisionChart from "../components/IncomeDistributionByDivisionChart";
import Header from "../components/Header";
import { Box, Typography, Paper } from "@mui/material";

const IncomeDistributionByDivisionPage = () => {
  return (
    <Box height="100%" maxHeight="85vh" m="1.5rem 2.5rem">
      <Header
        title="INCOME DISTRIBUTION BY DIVISION"
        subtitle="Explore income trends across different regions"
      />
      <Paper
        sx={{ padding: "16px", marginTop: "20px", marginBottom: "20px" }}
        elevation={3}
      >
        <Typography variant="h8">
          This chart shows the income distribution across various divisions,
          highlighting regional disparities and opportunities. It helps in
          regional planning and resource allocation.
        </Typography>
      </Paper>
      <Box mt="40px" height="72vh">
        <IncomeDistributionByDivisionChart />
      </Box>
    </Box>
  );
};

export default IncomeDistributionByDivisionPage;
