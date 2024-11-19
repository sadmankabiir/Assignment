const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  ID: { type: String, required: true, unique: true },
  CustomerName: { type: String, required: true },
  Division: { type: String, required: true },
  Gender: { type: String, required: true },
  MaritalStatus: { type: String, required: true },
  Age: { type: Number, required: true },
  Income: { type: Number, required: true },
});

module.exports = mongoose.model("Customer", CustomerSchema);
