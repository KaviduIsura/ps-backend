import express from "express";
import {
  getControlStates,
  updateControlStates,
} from "../controller/controlController2.js";

const controlRouter2 = express.Router();

controlRouter2.get("/", getControlStates);
controlRouter2.post("/", updateControlStates);

export default controlRouter2;
