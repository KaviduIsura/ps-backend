import Control from "../models/controlModel.js";

// Get the current control states
export const getControlStates = async (req, res) => {
  try {
    const control = await Control.findOne().sort({ createdAt: -1 }); // Get the latest record
    if (!control) {
      return res.status(200).json({
        fan1: false,
        fan2: false,
        led: false,
        manual: false,
        manualFan1: false,
        manualFan2: false,
        manualLed: false,
      }); // Default state
    }
    res.status(200).json(control);
  } catch (error) {
    res.status(500).json({ message: "Error fetching control states", error });
  }
};

// Update the control states
export const updateControlStates = async (req, res) => {
  try {
    const { fan1, fan2, led, manual, manualFan1, manualFan2, manualLed } = req.body;
    const newControl = new Control({
      fan1,
      fan2,
      led,
      manual,
      manualFan1,
      manualFan2,
      manualLed,
    });
    await newControl.save();
    res
      .status(200)
      .json({ message: "Control states updated successfully", newControl });
  } catch (error) {
    res.status(500).json({ message: "Error updating control states", error });
  }
};
