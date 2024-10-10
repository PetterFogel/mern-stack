import express, { Request, Response } from "express";
import connectDatabase from "./config/db";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDatabase();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.get("/", (_: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
