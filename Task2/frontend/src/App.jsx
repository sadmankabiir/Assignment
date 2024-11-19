import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import CustomersPage from "./pages/CustomersPage";
import AverageIncomePage from "./pages/AverageIncomePage";
import GenderDistributionPage from "./pages/GenderDistributionPage";
import IncomeByAgePage from "./pages/IncomeByAgePage";
import IncomeByDivisionPage from "./pages/IncomeByDivisionPage";
import AgeGroupDistributionPage from "./pages/AgeGroupDistributionPage";
import DivisionCustomerCountPage from "./pages/DivisionCustomerCountPage";
import SendEmailPage from "./pages/SendEmailPage";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Sidebar with fixed width */}
        <Sidebar />
        {/* Main content area with a left margin to avoid overlapping */}
        <div
          style={{
            marginLeft: "300px",
            padding: "20px",
            width: "calc(100% - 300px)",
          }}
        >
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/average-income" element={<AverageIncomePage />} />
            <Route
              path="/gender-distribution"
              element={<GenderDistributionPage />}
            />
            <Route path="/income-by-age" element={<IncomeByAgePage />} />
            <Route
              path="/income-by-division"
              element={<IncomeByDivisionPage />}
            />
            <Route
              path="/age-group-distribution"
              element={<AgeGroupDistributionPage />}
            />
            <Route
              path="/division-customer-count"
              element={<DivisionCustomerCountPage />}
            />
            <Route>
              <Route path="/send-email" element={<SendEmailPage />} />
            </Route>
            ;
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
