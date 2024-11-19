const express = require("express");
const {
  getAllCustomers,
  getAverageIncomeByMaritalStatus,
  getGenderDistribution,
  getIncomeByAgeGroup,
  getIncomeDistributionByDivision,
  getAgeGroupDistribution,
  getDivisionCustomerCount,
} = require("../controllers/customerController");

const router = express.Router();

// Get all customers
router.get("/", getAllCustomers);

// Get average income by marital status
router.get(
  "/average-income-by-marital-status",
  getAverageIncomeByMaritalStatus
);

// Get gender distribution
router.get("/gender-distribution", getGenderDistribution);

// Get income by age group
router.get("/income-by-age-group", getIncomeByAgeGroup);

// Get income distribution by division
router.get("/income-by-division", getIncomeDistributionByDivision);

// Get age group distribution
router.get("/age-group-distribution", getAgeGroupDistribution);

// Get division-wise customer count
router.get("/division-customer-count", getDivisionCustomerCount);

module.exports = router;
