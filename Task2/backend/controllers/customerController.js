const Customer = require("../models/Customer");

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch customers" });
  }
};

// Get average income by marital status
exports.getAverageIncomeByMaritalStatus = async (req, res) => {
  try {
    const data = await Customer.aggregate([
      { $group: { _id: "$MaritalStatus", averageIncome: { $avg: "$Income" } } },
    ]);
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch average income by marital status" });
  }
};

// Get gender distribution
exports.getGenderDistribution = async (req, res) => {
  try {
    const data = await Customer.aggregate([
      { $group: { _id: "$Gender", count: { $sum: 1 } } },
    ]);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gender distribution" });
  }
};

// Get income by age group
exports.getIncomeByAgeGroup = async (req, res) => {
  try {
    const data = await Customer.aggregate([
      {
        $bucket: {
          groupBy: "$Age",
          boundaries: [20, 25, 30, 35, 40, 50],
          default: "50+",
          output: { totalIncome: { $sum: "$Income" }, count: { $sum: 1 } },
        },
      },
    ]);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch income by age group" });
  }
};

// Get income distribution by division
exports.getIncomeDistributionByDivision = async (req, res) => {
  try {
    const data = await Customer.aggregate([
      { $group: { _id: "$Division", totalIncome: { $sum: "$Income" } } },
      { $sort: { totalIncome: -1 } },
    ]);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch income by division" });
  }
};

//age group distribution chart
exports.getAgeGroupDistribution = async (req, res) => {
  try {
    const ageGroups = await Customer.aggregate([
      {
        $bucket: {
          groupBy: "$Age",
          boundaries: [20, 25, 30, 35, 40, 50, 100], // Define age ranges
          default: "Unknown", // For ages outside the boundaries
          output: { count: { $sum: 1 } },
        },
      },
    ]);

    res.json(ageGroups);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch age group distribution" });
  }
};

// Division-Wise Customer Count
exports.getDivisionCustomerCount = async (req, res) => {
  try {
    const divisionCounts = await Customer.aggregate([
      {
        $group: {
          _id: "$Division",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } }, // Sort by count descending
    ]);

    res.json(divisionCounts);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch division-wise customer count" });
  }
};
