import express, { Request, Response } from "express";

const PORT = 5000;

const app = express();

app.get("/", (_: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
