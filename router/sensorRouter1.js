import express from "express";
import getLatestSensorData, {
  getSensorData,
  saveSensorData,
} from "../controller/sensorController.js";

const sensorRouter1 = express.Router();

sensorRouter1.get("/", getSensorData);
sensorRouter1.post("/", saveSensorData);
sensorRouter1.get("/latest", getLatestSensorData);
export default sensorRouter1;
