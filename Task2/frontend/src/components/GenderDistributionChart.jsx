import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsivePie } from "@nivo/pie";
import { Paper, Typography } from "@mui/material";

const GenderDistributionChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/customers/gender-distribution")
      .then((response) => {
        const formattedData = response.data.map((item) => ({
          id: item._id === "M" ? "Male" : "Female",
          label: item._id === "M" ? "Male" : "Female",
          value: item.count,
        }));
        setData(formattedData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Paper sx={{ padding: "16px", borderRadius: "8px" }} elevation={3}>
      <Typography variant="h6" gutterBottom>
        Gender Distribution
      </Typography>
      <div style={{ height: "500px" }}>
        {" "}
        <ResponsivePie
          data={data}
          margin={{ top: 50, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: "set3" }}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          legends={[
            {
              anchor: "top",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: -30,
              itemsSpacing: 10,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              symbolSize: 18,
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

export default GenderDistributionChart;
