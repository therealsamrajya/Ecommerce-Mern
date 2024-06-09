import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 4000;
const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());

// MongoDB connection string
const mongoURI =
  process.env.MONGO_URI ||
  "mongodb+srv://samrajya:samrajya9840257965@cluster0.piqzgfg.mongodb.net/e-commerce";

// Database connection with MongoDB
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// API creation
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server running on port ${port}`);
  } else {
    console.log("Error:", error);
  }
});
