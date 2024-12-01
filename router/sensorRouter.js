import express from "express";
import {
  getSensorData,
  saveSensorData,
} from "../controller/sensorController.js";

const sensorRouter = express.Router();
sensorRouter.post("/", saveSensorData);
sensorRouter.get("/", getSensorData);

export default sensorRouter;
