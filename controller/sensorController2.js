import SensorData2 from "../models/sensorModel2.js";

export const saveSensorData = async (req, res) => {
  const newSensorData = req.body;

  const sensorData = new SensorData2(newSensorData);

  try {
    await sensorData.save();
    res.status(200).json({ message: "Data saved successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to save data", error: err.message });
  }
};

export async function getSensorData(req, res) {
  try {
    const sensors = await SensorData2.find();
    res.json({
      list: sensors,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}
