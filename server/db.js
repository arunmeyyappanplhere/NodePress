import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

export const connectDB = async () => {
  await mongoose
    .connect(MONGO_URI)
    .then(() => console.log("DB is connected ✅"))
    .catch((error) => {
      console.log("Cannot connect to DB ❌" + error);
    });
};
