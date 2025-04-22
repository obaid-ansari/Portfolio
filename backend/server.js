const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to handle form submission
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Set up transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ansari.ubaid.1020@gmail.com", // Your Gmail address
        pass: "yijo yric clfl hpto", // App password (not your regular password)
      },
    });

    // Compose email
    const mailOptions = {
      from: email,
      to: "ansari.ubaid.1020@gmail.com", // Your Gmail to receive messages
      subject: `Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!✅" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send email.❌" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
