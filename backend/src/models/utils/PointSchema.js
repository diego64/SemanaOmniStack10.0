const mongoose = require("mongoose");

const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true
  },
  coordinates: {
    type: [Number], //Primeiro a latitude e depois a longitude
    required: true
  }
});

module.exports = PointSchema;