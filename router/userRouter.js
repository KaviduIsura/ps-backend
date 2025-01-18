import express from "express";
import {
  createUser,
  getUsers,
  userLogin,
} from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.post("/login", userLogin);
userRouter.get("/", getUsers);

export default userRouter;
