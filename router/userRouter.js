import express from "express";
import updateUser, {
  createUser,
  deleteUser,
  getUsers,
  userLogin,
} from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.post("/login", userLogin);
userRouter.get("/", getUsers);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);
export default userRouter;
