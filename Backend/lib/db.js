import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/life_aid_system";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ DB Error:", error);
  }
};