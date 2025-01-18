import express from "express";
import {
  getControlStates,
  updateControlStates,
} from "../controller/controlController.js";

const controlRouter1 = express.Router();

controlRouter1.get("/", getControlStates);
controlRouter1.post("/", updateControlStates);

export default controlRouter1;
