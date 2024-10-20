import { tokenHandler } from "../utils/tokenHandler";
import { Request, Response } from "express";
import User from "../models/userModel";
import { compare } from "bcrypt";

const authUser = async (_req: Request, res: Response) => {
  res.status(200).json({ message: "Auth User" });
};

const registerUser = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  const { name, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });

    if (userExist)
      return res.status(400).json({ message: "Email already exists" });

    const user = await User.create({ name, email, password });

    if (user) {
      tokenHandler(res, user._id);
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    }

    res.status(400).json({ message: "Invalid user details" });
  } catch (error) {
    console.log("Register User Error: ", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const loginUser = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const isValidUser = user && (await compare(password, user.password));

  if (isValidUser) {
    tokenHandler(res, user._id);
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  }

  res.status(401).json({ message: "Invalid email or password" });
};

const logoutUser = async (_req: Request, res: Response) => {
  res.clearCookie("token");

  res.status(200).json({ message: "User was logged out" });
};

export { authUser, registerUser, loginUser, logoutUser };
