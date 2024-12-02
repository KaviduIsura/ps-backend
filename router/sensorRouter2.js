import express from "express";
import {
  getSensorData,
  saveSensorData,
} from "../controller/sensorController2.js";

const sensorRouter2 = express.Router();

sensorRouter2.post("/", saveSensorData);
sensorRouter2.get("/", getSensorData);

export default sensorRouter2;
