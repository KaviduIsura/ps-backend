import SensorData from "../models/sensorModel.js";

export const saveSensorData = async (req, res) => {
  const newSensorData = req.body;

  const sensorData = new SensorData(newSensorData);

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
    const sensors = await SensorData.find();
    res.json({
      list: sensors,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
}

export default async function getLatestSensorData(req, res) {
  try {
    const latestData = await SensorData.findOne().sort({ timestamp: -1 }); // Sort by timestamp descending
    res.status(200).json(latestData);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch sensor data", error });
  }
}
