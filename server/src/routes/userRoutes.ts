import express from "express";
import { registerUser } from "../controllers/userController";

const userRoutes = express.Router();

userRoutes.post("/", registerUser);

export default userRoutes;
