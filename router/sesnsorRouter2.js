import express from "express";
import getLatestSensorData, {
  getSensorData,
  saveSensorData,
} from "../controller/sensorController2.js";

const sensorRouter2 = express.Router();

sensorRouter2.get("/", getSensorData);
sensorRouter2.post("/", saveSensorData);
sensorRouter2.get("/latest", getLatestSensorData);

export default sensorRouter2;
