
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Verification from "../models/verification.js";
import { sendEmail } from "../libs/send-email.js";
import aj from "../libs/arcjet.js";

const registerUser = async (req, res) => {
  try {
    const { email, name, password } = req.body;

     const decision = await aj.protect(req, { email }); // Deduct 5 tokens from the bucket
  console.log("Arcjet decision", decision);

  if (decision.isDenied()) {
      res.writeHead(403, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Invalid email address" }));
    } 

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email address already in use" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      email,
      password: hashPassword,
      name,
      emailVerified: false,
    });

    const verificationToken = jwt.sign(
      { userId: newUser._id, type: "emailVerification" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    await Verification.create({
      userId: newUser._id,
      token: verificationToken,
      expiresAt: new Date(Date.now() + 3600000),
    });

    const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;
    const emailBody = `
      <p>Hello ${name},</p>
      <p>Please verify your email by clicking the link below:</p>
      <p><a href="${verificationLink}">Verify Email</a></p>
      <p>If the link doesn't work, copy and paste this URL into your browser:</p>
      <p>${verificationLink}</p>
      <p>If you did not request this, please ignore this email.</p>
    `;
    const emailSubject = "Verify Your Email";

    const isEmailSent = await sendEmail(email, emailSubject, emailBody);
    if (!isEmailSent) {
      return res.status(500).json({ message: "Failed to send verification email" });
    }

    res.status(201).json({
      message: "User registered! Verification email sent. Please check your inbox.",
    });
  } catch (error) {
    console.error("registerUser error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ message: "Verification token is required" });
    }

    const verificationRecord = await Verification.findOne({ token });
    if (!verificationRecord) {
      return res.status(400).json({ message: "Invalid or expired verification token" });
    }

    if (verificationRecord.expiresAt < new Date()) {
      return res.status(400).json({ message: "Verification token has expired" });
    }

    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(400).json({ message: "Invalid verification token" });
    }

    if (payload.type !== "emailVerification") {
      return res.status(400).json({ message: "Invalid token type" });
    }

    await User.findByIdAndUpdate(payload.userId, { emailVerified: true });

    await Verification.deleteOne({ token });

    res.status(200).json({ message: "Email successfully verified. You can now log in." });
  } catch (error) {
    console.error("verifyEmail error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (!user.emailVerified) {
      return res.status(403).json({ message: "Please verify your email before logging in" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, type: "auth" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    user.lastLogin = new Date();
    await user.save();

    const userData = user.toObject();
    delete userData.password;

    res.status(200).json({
      message: "Login successful",
      token,
      user: userData,
    });
  } catch (error) {
    console.error("loginUser error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { registerUser, verifyEmail, loginUser };
