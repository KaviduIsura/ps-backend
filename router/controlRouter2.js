import express from "express";
import {
  getControlStates,
  updateControlStates,
} from "../controller/controlController2.js";

const router = express.Router();

// Route to get the current control states
router.get("/", getControlStates);

// Route to update the control states
router.post("/", updateControlStates);

export default router;