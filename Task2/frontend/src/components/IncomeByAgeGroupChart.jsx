import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsiveLine } from "@nivo/line";
import { Paper, Typography } from "@mui/material";

const IncomeByAgeGroupChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/customers/income-by-age-group")
      .then((response) => {
        const formattedData = [
          {
            id: "Income",
            data: response.data.map((item) => ({
              x: item._id,
              y: item.totalIncome,
            })),
          },
        ];
        setData(formattedData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Paper sx={{ padding: "16px", borderRadius: "8px" }} elevation={3}>
      <Typography variant="h6" gutterBottom>
        Income by Age Group
      </Typography>
      <div style={{ height: "500px" }}>
        {" "}
        <ResponsiveLine
          data={data}
          margin={{ top: 60, right: 20, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Age Group",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Total Income",
            legendOffset: -50,
            legendPosition: "middle",
          }}
          colors={{ scheme: "category10" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "top",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: -40,
              itemsSpacing: 10,
              itemWidth: 80,
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

export default IncomeByAgeGroupChart;
