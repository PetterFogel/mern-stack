import { Types } from "mongoose";
import { Response } from "express";
import jwt from "jsonwebtoken";

export const tokenHandler = (res: Response, userId: Types.ObjectId) => {
  const token = jwt.sign({ userId }, process.env.KEY_SECRET!, {
    expiresIn: "30d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
};
