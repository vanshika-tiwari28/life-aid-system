import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ["user", "donor"],
    default: "user"
  },

  bloodGroup: {
    type: String,
    default: null
  },

  city: {
    type: String,
    default: null
  }

}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);