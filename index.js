import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router/router.js";

import app from "./app.js";

dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoUrl = process.env.MONGODB_URI;
mongoose.connect(mongoUrl, {});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database connected");
});

// Routes
app.use("/api", router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
