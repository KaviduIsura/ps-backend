import express from "express";
import {
  getControlStates as getControlStates1,
  updateControlStates as updateControlStates1,
} from "../controller/controlController.js";
import {
  getControlStates as getControlStates2,
  updateControlStates as updateControlStates2,
} from "../controller/controlController2.js";

import {
  getSensorData,
  saveSensorData,
} from "../controller/sensorController.js";

import {
  getSensorData as getSensorData2,
  saveSensorData as saveSensorData2,
} from "../controller/sensorController2.js";

import {
  createUser,
  getUsers,
  userLogin,
} from "../controller/userController.js";

const router = express.Router();

// Route to get the current control states
router.get("/control", getControlStates1);

// Route to update the control states
router.post("/control", updateControlStates1);

// Route to get the current control states
router.get("/control2", getControlStates2);

// Route to update the control states
router.post("/control2", updateControlStates2);

router.post("/sensor", saveSensorData);
router.get("/sensor", getSensorData);

router.post("/sensor2", saveSensorData2);
router.get("/sensor2", getSensorData2);

router.post("/users", createUser);
router.get("/users", getUsers);
router.post("/user/login", userLogin);

export default router;
