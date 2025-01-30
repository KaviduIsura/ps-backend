import Control from "../models/controlModel2.js";

// Get the current control states
export const getControlStates = async (req, res) => {
  try {
    const control = await Control.findOne().sort({ createdAt: -1 }); // Get the latest record
    if (!control) {
      return res.status(200).json({ valve: false, manualValve: false }); // Default state
    }
    res.status(200).json(control);
  } catch (error) {
    res.status(500).json({ message: "Error fetching control states", error });
  }
};

// Update the control states
import Control2 from "../models/controlModel2.js"; // Ensure this import is correct

export const updateControlStates = async (req, res) => {
  try {
    const { valve, manualValve } = req.body;

    // Determine the new state for `valve` based on `manualValve`
    const updatedValve = manualValve !== undefined ? manualValve : valve;

    // Save the updated states in the database
    const newControl = new Control2({
      valve: updatedValve,
      manualValve,
    });

    await newControl.save();

    res.status(200).json({
      message: "Control states updated successfully",
      newControl,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating control states", error });
  }
};
