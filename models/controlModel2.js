import mongoose from "mongoose";

const controlSchema2 = new mongoose.Schema(
  {
    valve: { type: Boolean, default: false },
    led: { type: Boolean, default: false },
    manualValve: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Control2 = mongoose.model("Control2", controlSchema2);

export default Control2;
