import express from "express";
import dotenv from "dotenv";
import { route } from "./routes/routes.js";
dotenv.config();
const PORT = process.env.PORT || 8008;

const app = express();

app.get("/", (req, res) => {
  res.send("Home!");
});

app.listen(PORT, () => {
  console.log("Server is up 👍");
});

app.use("/api", route)