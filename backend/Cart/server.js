import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { connectDB } from "../config/db.js";
import cartRouter from "./routes/cartRoute.js";

const app = express();
const PORT = process.env.C_PORT;
app.use(express.json());
app.use(cors("*"));

connectDB();

app.use("/api/cart", cartRouter);
app.listen(PORT, () => {
  console.log(`Cart Server is running on ${PORT}`);
});
