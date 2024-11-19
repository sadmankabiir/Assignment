import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  Autocomplete,
} from "@mui/material";

const SendEmailPage = () => {
  const [recipients, setRecipients] = useState([]); // Store recipient list
  const [recipientEmail, setRecipientEmail] = useState(""); // Selected email
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [previewURL, setPreviewURL] = useState("");
  const [error, setError] = useState("");

  // Fetch recipients from the backend
  useEffect(() => {
    const fetchRecipients = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/email-recipients"
        );
        setRecipients(response.data);
      } catch (err) {
        console.error("Failed to fetch recipients:", err);
      }
    };

    fetchRecipients();
  }, []);

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setFeedback("");
    setPreviewURL("");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/emails/send",
        {
          recipientEmail,
          subject,
          message,
        }
      );
      setFeedback(response.data.success); // Success message from the backend
      setPreviewURL(response.data.previewURL); // Preview URL from the backend
    } catch (err) {
      setError(err.response?.data?.error || "Failed to send email.");
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Send Email
      </Typography>
      <form onSubmit={handleSendEmail}>
        <Autocomplete
          options={recipients}
          getOptionLabel={(option) => `${option.name} (${option.email})`}
          onChange={(event, value) => setRecipientEmail(value?.email || "")}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Recipient"
              margin="normal"
              required
            />
          )}
        />
        <TextField
          label="Subject"
          fullWidth
          margin="normal"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <TextField
          label="Message"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Send Email
        </Button>
      </form>
      {/* Success Feedback */}
      {feedback && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {feedback}
        </Alert>
      )}
      {/* Preview URL */}
      {previewURL && (
        <Typography sx={{ mt: 2 }}>
          <a href={previewURL} target="_blank" rel="noopener noreferrer">
            Preview Email
          </a>
        </Typography>
      )}
      {/* Error Feedback */}
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default SendEmailPage;
