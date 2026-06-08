import mongoose from "mongoose";

const EmergencySchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    requestType: String,
    priority: String,
    service: String,
    details: String,
  },
  { timestamps: true }
);

export default mongoose.models.Emergency ||
  mongoose.model("Emergency", EmergencySchema);