import mongoose from "mongoose";

const controlSchema = new mongoose.Schema(
  {
    fan1: { type: Boolean, default: false },
    fan2: { type: Boolean, default: false },
    led: { type: Boolean, default: false },
    manual: { type: Boolean, default: false }, // Manual mode flag
    manualFan1: { type: Boolean, default: false },
    manualFan2: { type: Boolean, default: false },
    manualLed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Control = mongoose.model("Control", controlSchema);

export default Control;
