import mongoose from "mongoose";

const sensorDataSchema = mongoose.Schema({
  temperature: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  soilMoisture: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const SensorData = mongoose.model("SensorData", sensorDataSchema);

export default SensorData;
