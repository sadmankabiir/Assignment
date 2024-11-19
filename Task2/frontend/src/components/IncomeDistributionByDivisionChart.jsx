import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveBar } from "@nivo/bar";
import { Paper, Typography } from "@mui/material";

const IncomeDistributionByDivisionChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/customers/income-by-division")
      .then((response) => {
        const formattedData = response.data.map((item) => ({
          Division: item._id,
          Income: item.totalIncome,
        }));
        setData(formattedData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Paper sx={{ padding: "16px", borderRadius: "8px" }} elevation={3}>
      <Typography variant="h6" gutterBottom>
        Income Distribution by Division
      </Typography>
      <div style={{ height: "500px" }}>
        {" "}
        <ResponsiveBar
          data={data}
          keys={["Income"]}
          indexBy="Division"
          margin={{ top: 60, right: 20, bottom: 50, left: 60 }}
          padding={0.3}
          colors={{ scheme: "paired" }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Division",
            legendPosition: "middle",
            legendOffset: 40,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Total Income",
            legendPosition: "middle",
            legendOffset: -50,
          }}
          legends={[
            {
              anchor: "top",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: -40,
              itemsSpacing: 10,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              symbolSize: 12,
              symbolShape: "circle",
              itemTextColor: "#333",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </Paper>
  );
};

export default IncomeDistributionByDivisionChart;
