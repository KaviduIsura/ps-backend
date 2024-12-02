import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import sensorRouter from "./router/sensorRouter.js";
import userRouter from "./router/userRouter.js";
import sensorRouter2 from "./router/sensorRouter2.js";
import controlRouter from "./router/controlRouter.js";

dotenv.config();
const app = express();

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
app.use("/api/sensor", sensorRouter);
app.use("/api/users", userRouter);
app.use("/api/sensor2", sensorRouter2);
app.use("/api/control", controlRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
