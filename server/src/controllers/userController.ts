import { Request, Response } from "express";
import User from "../models/userModel";

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
      return res.status(400).json({ message: "User Already Exists" });

    const user = await User.create({ name, email, password });

    if (user) {
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    }

    res.status(400).json({ message: "Invalid User Data" });
  } catch (error) {
    console.log("Register User Error: ", error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export { authUser, registerUser };
