import React from "react";
import { Container, Typography, Grid, Box, Divider } from "@mui/material";
import Header from "../components/Header";
import AverageIncomeByMaritalStatusChart from "./AverageIncomeByMaritalStatusChart";
import GenderDistributionChart from "./GenderDistributionChart";
import IncomeByAgeGroupChart from "./IncomeByAgeGroupChart";
import IncomeDistributionByDivisionChart from "./IncomeDistributionByDivisionChart";
import AgeGroupDistributionChart from "./AgeGroupDistributionChart";
import DivisionCustomerCountChart from "./DivisionCustomerCountChart";

const Dashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: "24px" }}>
      {/* Dashboard Header */}
      <Header
        title="DASHBOARD"
        subtitle="Overview of demographic and geographic analytics"
      />

      <Box mt={3}>
        <Typography variant="h5" gutterBottom>
          Demographic Analytics
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <AverageIncomeByMaritalStatusChart />
          </Grid>

          <Grid item xs={12} md={6}>
            <IncomeByAgeGroupChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <GenderDistributionChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <AgeGroupDistributionChart />
          </Grid>
        </Grid>
      </Box>

      <Box mt={5}>
        <Typography variant="h5" gutterBottom>
          Geographic Analytics
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <IncomeDistributionByDivisionChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <DivisionCustomerCountChart />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
