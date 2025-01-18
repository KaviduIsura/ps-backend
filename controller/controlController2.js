import Control from "../models/controlModel2.js";

// Get the current control states
export const getControlStates = async (req, res) => {
  try {
    const control = await Control.findOne().sort({ createdAt: -1 }); // Get the latest record
    if (!control) {
      return res
        .status(200)
        .json({ valve: false, led: false, manualValve: false }); // Default state
    }
    res.status(200).json(control);
  } catch (error) {
    res.status(500).json({ message: "Error fetching control states", error });
  }
};

// Update the control states
export const updateControlStates = async (req, res) => {
  try {
    const { valve, led, manual, manualValve } = req.body;

    // Ensure manual states update the corresponding control states
    const updatedValve = manual ? manualValve : valve;
    const updatedLed = led;

    // Synchronize manual states with the actual states
    const newControl = new Control({
      valve: updatedValve, // Sync fan1 with manualFan1 when manual is true
      led: updatedLed, // Sync led with manualLed when manual is true
      manual,
      manualValve: updatedValve, // Ensure consistency with fan1
    });

    await newControl.save();

    res
      .status(200)
      .json({ message: "Control states updated successfully", newControl });
  } catch (error) {
    res.status(500).json({ message: "Error updating control states", error });
  }
};
