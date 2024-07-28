import express from "express";
import Profile from "../models/Profile.js";
import jwt from "jsonwebtoken";
const router = express.Router();

router.use(async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).json({ success: false, error: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(400).json({ success: false, error: "Invalid token" });
  }
});

router.post("/", async (req, res) => {
  const {
    firstName,
    lastName,
    profession,
    address,
    city,
    state,
    zipCode,
    experiences,
  } = req.body;
  try {
    const profile = await Profile.create({
      userId: req.userId,
      firstName,
      lastName,
      profession,
      address,
      city,
      state,
      zipCode,
      experiences,
    });
    res.status(201).json({ success: true, profile });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.userId });
    res.json({ success: true, profile });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
