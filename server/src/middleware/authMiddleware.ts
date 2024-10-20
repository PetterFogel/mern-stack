import { Request, Response, NextFunction } from "express";
import User from "../models/userModel";
import jwt, { JwtPayload } from "jsonwebtoken";

interface IJwtPayload extends JwtPayload {
  userId: string;
}

const authRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | any> => {
  const token = req.cookies.token;

  if (!token) return res.status(401).send("Access denied");

  try {
    const { userId } = jwt.verify(
      token,
      process.env.KEY_SECRET || ""
    ) as IJwtPayload;

    req.user = await User.findById(userId);

    next();
  } catch (error) {
    return res.status(401).send("Invalid token");
  }
};

export { authRoute };
