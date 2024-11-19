import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveBar } from "@nivo/bar";
import { Paper, Typography } from "@mui/material";

const AgeGroupDistributionChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/customers/age-group-distribution")
      .then((response) => {
        const formattedData = response.data.map((group) => ({
          AgeGroup: group._id,
          Count: group.count,
        }));
        setData(formattedData);
      })
      .catch((error) => console.error("Error fetching age group data:", error));
  }, []);

  return (
    <Paper sx={{ padding: "16px", borderRadius: "8px" }} elevation={3}>
      <Typography variant="h6" gutterBottom>
        Age Group Distribution
      </Typography>
      <div style={{ height: "500px", width: "100%" }}>
        {" "}
        <ResponsiveBar
          data={data}
          keys={["Count"]}
          indexBy="AgeGroup"
          margin={{ top: 50, right: 20, bottom: 50, left: 60 }}
          padding={0.3}
          colors={{ scheme: "nivo" }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Age Group",
            legendPosition: "middle",
            legendOffset: 40,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Customer Count",
            legendPosition: "middle",
            legendOffset: -50,
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "top",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: -20,
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

export default AgeGroupDistributionChart;
