import express from "express";
import { authRoute } from "../middleware/authMiddleware";
import {
  registerUser,
  loginUser,
  authUser,
} from "../controllers/userController";

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/auth", authRoute, authUser);

export default userRoutes;
