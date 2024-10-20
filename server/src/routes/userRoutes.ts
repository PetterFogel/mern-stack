import express from "express";
import {
  authUser,
  registerUser,
  loginUser,
} from "../controllers/userController";

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/auth", authUser);

export default userRoutes;
