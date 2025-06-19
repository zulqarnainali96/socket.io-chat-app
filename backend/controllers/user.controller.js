// controllers/user.controller.js
const User = require("../models/user.model");
const bcrypt = require("bcrypt")

// Create a new user
const createUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password, // Note: In a real app, you should hash the password before saving
    });

    // Save user to database
    const savedUser = await newUser.save();

    // Return response (excluding password)
    const userResponse = {
      id: savedUser._id,
      email: savedUser.email,
      name : savedUser.name,
      createdAt: savedUser.createdAt,
      updatedAt: savedUser.updatedAt,
    };

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: userResponse,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: "Error creating user",
      error: error.message,
    });
  }
};

// Get all users (for testing purposes)
const getUsers = async (req, res) => {
  const id = req.params.id;
  try {
    const users = await User.find({}, { password: 0 }); // Exclude passwords from response
    // Filter out the user with matching _id (convert both to string for comparison)
    const filteredUsers = users.filter(user => user._id.toString() !== id);
    
    res.status(200).json({
      success: true,
      count: filteredUsers.length, // Use filtered count
      data: filteredUsers
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching users',
      error: error.message
    });
  }
};

// User login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // 2. Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // 3. Successful login
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        email: user.email,
        id: user._id
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Login failed',
      error: error.message
    });
  }
};
module.exports = { createUser, getUsers, loginUser };
