import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    problem: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    participant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["active", "completed"],
      default: "active",
    },
    callID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

sessionSchema.index({ status: 1, createdAt: -1 });
sessionSchema.index({ host: 1, status: 1, createdAt: -1 });
sessionSchema.index({ participant: 1, status: 1, createdAt: -1 });
sessionSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

const Session = mongoose.model("Session", sessionSchema);

export default Session;