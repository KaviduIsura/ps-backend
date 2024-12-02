import mongoose from "mongoose";

const sensorDataSchema2 = mongoose.Schema({
  soilMoisture: {
    type: Number,
    required: true, // Store soil moisture as a number (percentage)
  },
  motionDetected: {
    type: Boolean,
    required: true, // Store whether motion was detected (true/false)
  },
  timestamp: {
    type: Date,
    default: Date.now, // Automatically sets the timestamp when the data is recorded
  },
});

const SensorData2 = mongoose.model("SensorData", sensorDataSchema2);

export default SensorData2;
