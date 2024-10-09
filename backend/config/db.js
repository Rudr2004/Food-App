import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rudrajan24:rudrajan24@cluster0.5assa.mongodb.net/food-del"
    )
    .then(() => console.log("Database connected Successfully!!"));
};
