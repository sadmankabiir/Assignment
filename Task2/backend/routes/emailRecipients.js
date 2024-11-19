const express = require("express");
const EmailRecipient = require("../models/EmailRecipient");
const router = express.Router();

// GET all email recipients
router.get("/", async (req, res) => {
  try {
    const recipients = await EmailRecipient.find({}, "id name email"); // Fetch id, name, and email
    res.json(recipients);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch email recipients" });
  }
});

module.exports = router;
