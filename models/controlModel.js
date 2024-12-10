import mongoose from "mongoose";

const controlSchema = new mongoose.Schema(
  {
    fan1: { type: Boolean, default: false }, // Automatic control for Fan 1
    fan2: { type: Boolean, default: false }, // Automatic control for Fan 2
    led: { type: Boolean, default: false }, // Automatic control for LED strip

    manualFan1: { type: Boolean, default: false }, // Manual override for Fan 1
    manualFan2: { type: Boolean, default: false }, // Manual override for Fan 2
    manualLed: { type: Boolean, default: false }, // Manual override for LED strip
  },
  { timestamps: true } // Automatically add `createdAt` and `updatedAt` timestamps
);

const Control = mongoose.model("Control", controlSchema);

export default Control;
