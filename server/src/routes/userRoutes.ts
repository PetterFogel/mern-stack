import express from "express";
import { authUser, registerUser } from "../controllers/userController";

const userRoutes = express.Router();

userRoutes.post("/", registerUser);
userRoutes.post("/auth", authUser);

export default userRoutes;
