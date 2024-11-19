// src/App.js
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const App = () => {
  const data = [
    { Date: "2024-07-11", Product: "aaa", MonthSales: 10 },
    { Date: "2024-04-10", Product: "hgt", MonthSales: 20 },
    { Date: "2024-09-11", Product: "prp", MonthSales: 11 },
    { Date: "2024-02-10", Product: "ooo", MonthSales: 8 },
    { Date: "2024-07-10", Product: "aaa", MonthSales: 12 },
    { Date: "2024-08-11", Product: "rtt", MonthSales: 20 },
    { Date: "2024-08-10", Product: "rtt", MonthSales: 18 },
    { Date: "2024-11-10", Product: "ghh", MonthSales: 8 },
    { Date: "2024-11-17", Product: "dww", MonthSales: 18 },
    { Date: "2024-11-17", Product: "ytt", MonthSales: 17 },
    { Date: "2024-06-11", Product: "eee", MonthSales: 15 },
    { Date: "2024-10-17", Product: "dww", MonthSales: 19 },
    { Date: "2024-02-11", Product: "qyy", MonthSales: 7 },
    { Date: "2024-09-10", Product: "prp", MonthSales: 10 },
    { Date: "2024-04-11", Product: "hgt", MonthSales: 19 },
    { Date: "2024-02-11", Product: "ooo", MonthSales: 17 },
    { Date: "2024-06-10", Product: "eee", MonthSales: 13 },
    { Date: "2024-11-11", Product: "ghh", MonthSales: 5 },
    { Date: "2024-10-17", Product: "ytt", MonthSales: 17 },
    { Date: "2024-02-10", Product: "qyy", MonthSales: 10 },
  ];

  // State for selected months for current and comparison
  const [currentMonth, setCurrentMonth] = useState("2024-11");
  const [selectedMonth, setSelectedMonth] = useState("");

  const uniqueProducts = Array.from(new Set(data.map((item) => item.Product)));

  // Filter data for current and selected month sales
  const currentMonthData = uniqueProducts.map((product) => {
    const item = data.find(
      (d) => d.Date.startsWith(currentMonth) && d.Product === product
    );
    return item ? item.MonthSales : 0;
  });

  const selectedMonthData = uniqueProducts.map((product) => {
    const item = data.find(
      (d) => d.Date.startsWith(selectedMonth) && d.Product === product
    );
    return item ? item.MonthSales : 0;
  });

  const chartData = {
    labels: uniqueProducts,
    datasets: [
      {
        type: "line",
        label: "Selected Month Sales",
        data: selectedMonthData,
        borderColor: "red",
        borderWidth: 2,
        pointBackgroundColor: "red",
        fill: false,
      },
      {
        type: "bar",
        label: "Current Month Sales",
        data: currentMonthData,
        backgroundColor: "blue",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "Current & Selected Month Sales by Product",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Sales",
        },
      },
      x: {
        title: {
          display: true,
          text: "Product",
        },
      },
    },
  };

  return (
    <Container className="mt-5">
      <h3 className="text-center">Current & Selected Month Sales by Product</h3>

      <Form className="mb-3">
        <Form.Group className="mb-2">
          <Form.Label>Current Month</Form.Label>
          <Form.Control
            type="month"
            value={currentMonth}
            onChange={(e) => setCurrentMonth(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Selected Month</Form.Label>
          <Form.Control
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          />
        </Form.Group>
      </Form>

      <Bar data={chartData} options={options} />
    </Container>
  );
};

export default App;
