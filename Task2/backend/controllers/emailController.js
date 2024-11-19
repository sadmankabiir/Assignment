const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  const { recipientEmail, subject, message } = req.body;

  if (!recipientEmail || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "rupert.lang@ethereal.email", // Your Ethereal username
        pass: "vDuUDcfbkzMQ7A6GyH", // Your Ethereal password
      },
    });

    // Email options
    const mailOptions = {
      from: '"Sadman Kabir" <sadmankabir2@gmail.com>', // Sender address
      to: recipientEmail, // List of recipients
      subject, // Subject line
      text: message, // Plain text body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    // Preview URL
    const previewURL = nodemailer.getTestMessageUrl(info);

    res.status(200).json({
      success: "Email sent successfully!",
      previewURL,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};
