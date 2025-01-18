import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import controlRouter1 from "./router/controleRouter1.js";
import controlRouter2 from "./router/controlRouter2.js";
import sensorRouter1 from "./router/sensorRouter1.js";
import sensorRouter2 from "./router/sesnsorRouter2.js";
import userRouter from "./router/userRouter.js";

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

// middleware to handle token
app.use((req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log(token);

  if (token != null) {
    jwt.verify(token, process.env.SECRETE, (error, decoded) => {
      if (!error) {
        req.user = decoded;
      }
    });
  }
  next();
});

// Routes
app.use("/api/control1", controlRouter1);
app.use("/api/control2", controlRouter2);
app.use("/api/sensor1", sensorRouter1);
app.use("/api/sensor2", sensorRouter2);
app.use("/api/user", userRouter);

const port = process.env.PORT || 5003;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
