const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: String,
  description: String,
  coordinate: Mixed,
  updatedAt: Date,
});

export default markerSchema;
