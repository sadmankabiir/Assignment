import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import LineChartIcon from "@mui/icons-material/ShowChart";
import EmailIcon from "@mui/icons-material/Email";
import logo from "/logo.png";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main Items",
  },
  {
    segment: "/",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "/customers",
    title: "Customers",
    icon: <PeopleIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Email",
  },
  {
    segment: "/send-email",
    title: "Send Email",
    icon: <EmailIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "/average-income",
    title: "Average Income by Marital Status",
    icon: <BarChartIcon />,
  },
  {
    segment: "/gender-distribution",
    title: "Gender Distribution",
    icon: <PieChartIcon />,
  },
  {
    segment: "/income-by-age",
    title: "Income by Age Group",
    icon: <LineChartIcon />,
  },
  {
    segment: "/income-by-division",
    title: "Income by Division",
    icon: <BarChartIcon />,
  },
  {
    segment: "/age-group-distribution",
    title: "Age Group Distribution",
    icon: <BarChartIcon />,
  },
  {
    segment: "/division-customer-count",
    title: "Division Customer Count",
    icon: <PieChartIcon />,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "300px",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        overflowY: "auto",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        marginBottom="20px"
        style={{
          gap: "10px",
        }}
      >
        <img
          src={logo}
          alt="Renata Logo"
          style={{
            height: "40px",
            width: "103px",
            objectFit: "contain",
          }}
        />
        <Typography variant="h7" style={{ color: "#0e4194" }}>
          Renata PLC
        </Typography>
      </Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        style={{
          marginBottom: "20px",
        }}
      >
        Analytical Dashboard
      </Typography>
      {NAVIGATION.map((item, index) => {
        if (item.kind === "header") {
          return (
            <Typography
              key={index}
              variant="subtitle1"
              style={{
                marginTop: "20px",
                marginBottom: "10px",
                color: "black",
              }}
            >
              {item.title}
            </Typography>
          );
        }
        if (item.kind === "divider") {
          return <Divider key={index} style={{ margin: "10px 0" }} />;
        }

        const isSelected = location.pathname === item.segment;

        return (
          <List key={index}>
            <ListItem
              button
              component={Link}
              to={item.segment}
              style={{
                backgroundColor: isSelected ? "#e0e0e0" : "transparent",
                borderRadius: "8px",
              }}
            >
              <ListItemIcon
                style={{
                  color: isSelected ? "#1976d2" : "black",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  style: {
                    color: "black",
                    fontWeight: isSelected ? "normal" : "normal",
                  },
                }}
              />
            </ListItem>
          </List>
        );
      })}
    </div>
  );
}
