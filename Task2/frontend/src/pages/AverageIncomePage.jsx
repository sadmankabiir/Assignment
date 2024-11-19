import React from "react";
import AverageIncomeByMaritalStatusChart from "../components/AverageIncomeByMaritalStatusChart";
import Header from "../components/Header";
import { Box, Typography, Paper } from "@mui/material";

const AverageIncomeByMaritalStatusPage = () => {
  return (
    <Box height="100%" maxHeight="85vh" m="1.5rem 2.5rem">
      <Header
        title="AVERAGE INCOME BY MARITAL STATUS"
        subtitle="Analyze average income based on customers' marital status"
      />
      <Paper
        sx={{ padding: "16px", marginTop: "20px", marginBottom: "20px" }}
        elevation={3}
      >
        <Typography variant="h8">
          This chart highlights the average income of customers grouped by their
          marital status. It helps understand how marital status correlates with
          income levels, providing valuable insights for financial planning and
          marketing strategies.
        </Typography>
      </Paper>
      <Box mt="40px" height="72vh">
        <AverageIncomeByMaritalStatusChart />
      </Box>
    </Box>
  );
};

export default AverageIncomeByMaritalStatusPage;
