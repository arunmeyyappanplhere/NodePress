import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { route } from "./routes/routes.js";
import { connectDB } from "./db.js";
dotenv.config();
const PORT = process.env.PORT || 8008;

const app = express();

app.use(express.json({ limit: "5mb" }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Home!");
});

app.listen(PORT, () => {
  console.log("Server is up 👍");
});
await connectDB();

app.use("/api", route);
