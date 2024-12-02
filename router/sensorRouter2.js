import express from "express";
import { saveSensorData } from "../controller/sensorController2";

const sensorRouter2 = express.Router();

sensorRouter2.post("/", saveSensorData);

export default sensorRouter2;
