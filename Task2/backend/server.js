const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const customerRoutes = require("./routes/customerRoutes");
const emailRoutes = require("./routes/emailRoutes");
const emailRecipientRoutes = require("./routes/emailRecipients");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.use("/api/customers", customerRoutes);
app.use("/api/emails", emailRoutes);
app.use("/api/email-recipients", emailRecipientRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
