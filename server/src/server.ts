import express, { Request, Response } from "express";
import connectDatabase from "./config/db";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDatabase();

const app = express();

app.get("/", (_: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
