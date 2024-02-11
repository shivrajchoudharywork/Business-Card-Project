import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/cards");
  } catch (error) {
    console.log(error);
  }
};

connectDB();
