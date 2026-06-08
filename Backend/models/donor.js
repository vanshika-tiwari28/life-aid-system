import mongoose from "mongoose";

const donorSchema = new mongoose.Schema(
  {
    name: String,
    bloodGroup: String,
    phone: String,
    city: String,
    age: Number,
  },
  { timestamps: true }
);

export default mongoose.models.Donor ||
  mongoose.model("Donor", donorSchema);