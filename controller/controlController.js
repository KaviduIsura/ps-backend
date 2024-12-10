import Control from "../models/controlModel.js";

// Get the current control states
export const getControlStates = async (req, res) => {
  try {
    const control = await Control.findOne().sort({ createdAt: -1 }); // Get the latest record
    if (!control) {
      // Default state if no record exists
      return res.status(200).json({
        fan1: false,
        fan2: false,
        led: false,
        manualFan1: false,
        manualFan2: false,
        manualLed: false,
      });
    }
    res.status(200).json(control);
  } catch (error) {
    res.status(500).json({ message: "Error fetching control states", error });
  }
};

// Update the control states
export const updateControlStates = async (req, res) => {
  try {
    const { fan1, fan2, led, manual, manualFan1, manualFan2, manualLed } =
      req.body;

    // Ensure manual states update the corresponding control states
    const updatedFan1 = manual ? manualFan1 : fan1;
    const updatedFan2 = manual ? manualFan2 : fan2;
    const updatedLed = manual ? manualLed : led;

    // Synchronize manual states with the actual states
    const newControl = new Control({
      fan1: updatedFan1, // Sync fan1 with manualFan1 when manual is true
      fan2: updatedFan2, // Sync fan2 with manualFan2 when manual is true
      led: updatedLed, // Sync led with manualLed when manual is true
      manual,
      manualFan1: updatedFan1, // Ensure consistency with fan1
      manualFan2: updatedFan2, // Ensure consistency with fan2
      manualLed: updatedLed, // Ensure consistency with led
    });

    await newControl.save();

    res
      .status(200)
      .json({ message: "Control states updated successfully", newControl });
  } catch (error) {
    res.status(500).json({ message: "Error updating control states", error });
  }
};
