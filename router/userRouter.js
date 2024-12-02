import express from "express";
import {
  createUser,
  getUsers,
  userLogin,
} from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.post("/login", userLogin);

export default userRouter;
