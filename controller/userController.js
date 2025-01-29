import User from "../models/userModel.js";
import bcrypt, { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

export async function createUser(req, res) {
  try {
    const newUserData = req.body;
    newUserData.password = bcrypt.hashSync(newUserData.password, 10);
    const user = new User(newUserData);
    await user.save();
    res.json({
      message: "User Created",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

export function userLogin(req, res) {
  User.find({ email: req.body.email }).then((users) => {
    if (users.length == 0) {
      res.json({
        message: "User Not found",
      });
    } else {
      const user = users[0];
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (isPasswordCorrect) {
        const token = jwt.sign(
          {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            address: user.address,
          },
          process.env.SECRETE
        );
        res.json({
          message: "User Logged in",
          token: token,
          user: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            address: user.address,
          },
        });
      } else {
        res.json({
          message: "User not Logged in ,Invalid Password ",
        });
      }
    }
  });
}

// get user function
export async function getUsers(req, res) {
  try {
    const users = await User.find({});
    res.json({
      list: users,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

export function deleteUser(req, res) {
  const id = req.params.id;

  User.deleteOne({ _id: id })
    .then(() => {
      res.json({
        message: "User deleted",
      });
    })
    .catch((error) => {
      res.status(403).json({
        message: error,
      });
    });
}

//update User
export default function updateUser(req, res) {
  const userId = req.params._id;
  const newUserData = req.body;

  console.log("User ID:", userId);

  User.updateOne({ userId: userId }, newUserData)
    .then(() => {
      res.status(200).json({
        message: "User updated",
      });
    })
    .catch((error) => {
      res.status(403).json({
        message: error,
      });
    });
}
