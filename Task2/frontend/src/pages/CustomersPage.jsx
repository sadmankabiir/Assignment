import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import { Box, Typography, Paper } from "@mui/material";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/customers")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => console.error("Error fetching customer data:", error));
  }, []);

  const columns = [
    { field: "ID", headerName: "ID", flex: 1 },
    { field: "CustomerName", headerName: "Name", flex: 1 },
    { field: "Division", headerName: "Division", flex: 1 },
    { field: "Gender", headerName: "Gender", flex: 0.5 },
    { field: "MaritalStatus", headerName: "Marital Status", flex: 1 },
    { field: "Age", headerName: "Age", flex: 0.5 },
    { field: "Income", headerName: "Income", flex: 1 },
  ];

  return (
    <Box height="100%" maxHeight="85vh" m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="List of Customers" />
      <Box mt="40px" height="72vh">
        <DataGrid
          rows={customers}
          columns={columns}
          getRowId={(row) => row.ID}
          disableSelectionOnClick
          pageSize={10}
        />
      </Box>
    </Box>
  );
};

export default CustomersPage;
