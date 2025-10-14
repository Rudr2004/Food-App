import express from "express";
import dotenv from "dotenv";
import foodRouter from "./routes/foodRoute.js";
dotenv.config();
import cors from "cors";
import { connectDB } from "../config/db.js";

const app = express();
const PORT = process.env.F_PORT;
app.use(cors("*"));
app.get("/", (req, res) => {
  res.send("Food Server is running");
});

//Db connection
connectDB();

app.use("/api/food", foodRouter);
app.listen(PORT, () => {
  console.log(`Food Server is running on port ${PORT}`);
});
