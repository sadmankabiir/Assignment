// src/BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import { Container } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const products = [
    {
      Product: "aaa",
      TotalValue: 10,
      TotalSales: 10,
    },
    {
      Product: "ooo",
      TotalValue: 17,
      TotalSales: 8,
    },
    {
      Product: "rtt",
      TotalValue: 23,
      TotalSales: 4,
    },
    {
      Product: "ghh",
      TotalValue: 40,
      TotalSales: 15,
    },
    {
      Product: "dww",
      TotalValue: 30,
      TotalSales: 10,
    },
    {
      Product: "ytt",
      TotalValue: 26,
      TotalSales: 7,
    },
    {
      Product: "eee",
      TotalValue: 15,
      TotalSales: 7,
    },
    {
      Product: "qyy",
      TotalValue: 18,
      TotalSales: 7,
    },
    {
      Product: "prp",
      TotalValue: 20,
      TotalSales: 7,
    },
    {
      Product: "hgt",
      TotalValue: 40,
      TotalSales: 7,
    },
  ];

  // Sorting the products by Total Sales(descending order)
  const sortedProducts = [...products].sort(
    (a, b) => b.TotalSales - a.TotalSales
  );

  const labels = sortedProducts.map((item) => item.Product);
  const totalSalesData = sortedProducts.map((item) => item.TotalSales);
  const totalValueData = sortedProducts.map((item) => item.TotalValue);

  const barColors = [
    "#7f2704",
    "#e95e0d",
    "#fff5eb",
    "#fdd3a8",
    "#7f2704",
    "#fa8331",
    "#fdcb9b",
    "#fdb97d",
    "#fedfbf",
    "#fd9f55",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Sales",
        data: totalSalesData,
        backgroundColor: barColors,
        borderColor: barColors.map((color) => color),
        borderWidth: 1,
        yAxisID: "y",
      },
      {
        label: "Total Value",
        data: totalValueData,
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderWidth: 0,
        //backgroundColor: "rgba(255, 159, 64, 0.5)",
        //borderColor: "rgba(255, 159, 64, 1)",
        //borderWidth: 1,
        type: "line",
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Total Sales",
        },
        position: "left",
      },
      y1: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Total Value",
        },
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        title: {
          display: true,
          text: "Product",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const index = context.dataIndex;
            const product = sortedProducts[index];
            return [
              `Product: ${product.Product}`,
              `Total Sales: ${product.TotalSales}`,
              `Total Value: ${product.TotalValue}`,
            ];
          },
        },
      },
    },
  };

  return (
    <Container className="mt-5">
      <h3 className="text-center">
        Product Sales Chart (Sorted by Total Sales)
      </h3>
      <Bar data={data} options={options} />
    </Container>
  );
};

export default BarChart;
