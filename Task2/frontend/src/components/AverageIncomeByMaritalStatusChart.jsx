import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveBar } from "@nivo/bar";
import { Paper, Typography } from "@mui/material";

const AverageIncomeByMaritalStatusChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/customers/average-income-by-marital-status"
      )
      .then((response) => {
        const formattedData = response.data.map((item) => ({
          MaritalStatus: item._id,
          Income: parseFloat(item.averageIncome.toFixed(2)),
        }));
        setData(formattedData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Paper sx={{ padding: "16px", borderRadius: "8px" }} elevation={3}>
      <Typography variant="h6" gutterBottom>
        Average Income by Marital Status
      </Typography>
      <div style={{ height: "500px" }}>
        <ResponsiveBar
          data={data}
          keys={["Income"]}
          indexBy="MaritalStatus"
          margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
          padding={0.3}
          colors={{ scheme: "nivo" }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Marital Status",
            legendPosition: "middle",
            legendOffset: 40,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Average Income",
            legendPosition: "middle",
            legendOffset: -50,
          }}
          tooltip={({ indexValue, value }) => (
            <div
              style={{
                background: "white",
                padding: "5px",
                border: "1px solid #ccc",
                borderRadius: "3px",
              }}
            >
              <strong>{indexValue}</strong>: ${value.toFixed(2)}
            </div>
          )}
          legends={[
            {
              dataFrom: "keys",
              anchor: "top",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: -30,
              itemsSpacing: 2,
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

export default AverageIncomeByMaritalStatusChart;
