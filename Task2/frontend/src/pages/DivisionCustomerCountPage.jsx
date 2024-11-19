import React from "react";
import DivisionCustomerCountChart from "../components/DivisionCustomerCountChart";
import Header from "../components/Header";
import { Box, Typography, Paper } from "@mui/material";

const DivisionCustomerCountPage = () => {
  return (
    <Box height="100%" maxHeight="85vh" m="1.5rem 2.5rem">
      <Header
        title="DIVISION CUSTOMER COUNT"
        subtitle="View the distribution of customers across divisions"
      />
      <Paper
        sx={{ padding: "16px", marginTop: "20px", marginBottom: "20px" }}
        elevation={3}
      >
        <Typography variant="h8">
          This chart displays the number of customers in each division,
          providing insights into regional customer density. It helps in
          focusing marketing efforts on high-density areas.
        </Typography>
      </Paper>
      <Box mt="40px" height="72vh">
        <DivisionCustomerCountChart />
      </Box>
    </Box>
  );
};

export default DivisionCustomerCountPage;
