import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password, address, latitude, longitude } = req.body;

    if (!name || !email || !password || latitude == null || longitude == null) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const registeredDay = new Date().getDay(); // 0 = Sunday

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      address,
      latitude,
      longitude,
      registered_day: registeredDay
    });

    const token = jwt.sign(
      { userId: user._id, latitude, longitude },
      process.env.JWT_SECRET
    );

    res.json({
      status_code: 200,
      message: "User created successfully",
      data: {
        name: user.name,
        email: user.email,
        address: user.address,
        latitude: user.latitude,
        longitude: user.longitude,
        status: "active",
        register_at: user.registered_at,
        token
      }
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: err.message });
  }
};
