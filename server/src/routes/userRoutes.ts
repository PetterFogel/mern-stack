import express from "express";
import { authRoute } from "../middleware/authMiddleware";
import {
  registerUser,
  logoutUser,
  loginUser,
  authUser,
} from "../controllers/userController";

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/logout", logoutUser);
userRoutes.post("/auth", authRoute, authUser);

export default userRoutes;
