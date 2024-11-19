import React, { useEffect, useState } from "react";
import axios from "axios";
import { ResponsivePie } from "@nivo/pie";
import { Paper, Typography } from "@mui/material";

const DivisionCustomerCountChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/customers/division-customer-count")
      .then((response) => {
        const formattedData = response.data.map((division) => ({
          id: division._id,
          label: division._id,
          value: division.count,
        }));
        setData(formattedData);
      })
      .catch((error) =>
        console.error("Error fetching division customer count:", error)
      );
  }, []);

  return (
    <Paper sx={{ padding: "16px", borderRadius: "8px" }} elevation={3}>
      <Typography variant="h6" gutterBottom>
        Division-Wise Customer Count
      </Typography>
      <div style={{ height: "500px", width: "100%" }}>
        {" "}
        <ResponsivePie
          data={data}
          margin={{ top: 60, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: "set3" }}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: "color" }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
          legends={[
            {
              anchor: "top",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: -40,
              itemsSpacing: 0.5,
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

export default DivisionCustomerCountChart;
