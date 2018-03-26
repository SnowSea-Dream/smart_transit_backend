const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const markerSchema = new Schema({
  title: String,
  description: String,
  coordinate: {
    lat: String,
    lng: String,
  },
  updatedAt: Date,
});

module.exports = mongoose.model('Marker', markerSchema);
