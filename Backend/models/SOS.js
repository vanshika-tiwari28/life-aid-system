import mongoose from "mongoose";

const SOSSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.SOS || mongoose.model("SOS", SOSSchema);