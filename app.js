import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Import Controllers
import * as sensorController from "./controller/sensorController.js";
import * as userController from "./controller/userController.js";
import * as controlController from "./controller/controlController.js";
import * as controlController2 from "./controller/controlController2.js";
import * as sensorController2 from "./controller/sensorController2.js";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic Routes
// Sensor Routes
app.get("/api/sensor", (req, res) => {
  sensorController.getSensorData(req, res);
});

app.post("/api/sensor", (req, res) => {
  sensorController.saveSensorData(req, res);
});

// User Routes
// User Routes
app.get("/api/users", (req, res) => {
  userController.getUsers(req, res); // Fetch users
});

app.post("/api/users", (req, res) => {
  userController.createUser(req.body, (response) => {
    res.json(response); // Create user
  });
});

app.post("/api/users/login", (req, res) => {
  userController.userLogin(req.body, (response) => {
    res.json(response); // User login
  });
});

// Sensor 2 Routes
app.get("/api/sensor2", (req, res) => {
  sensorController2.getSensorData(req, res);
});

app.post("/api/sensor2", (req, res) => {
  sensorController2.saveSensorData(req, res);
});

// Control Routes
app.get("/api/control", (req, res) => {
  controlController.getControlStates(req, res);
});

app.post("/api/control", (req, res) => {
  controlController.updateControlStates(req, res);
});

// Control 2 Routes
app.get("/api/control2", (req, res) => {
  controlController2.getControlStates(req, res);
});

app.post("/api/control2", (req, res) => {
  controlController2.updateControlStates(req, res);
});

// Export the app
export default app;
