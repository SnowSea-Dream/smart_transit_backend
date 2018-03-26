const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const markerSchema = new Schema({
  title: String,
  description: String,
  coordinate: {
    latitude: Number,
    longitude: Number,
  },
  updatedAt: Date,
});

module.exports = mongoose.model('Marker', markerSchema);
