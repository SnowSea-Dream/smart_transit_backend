'use strict';

const Marker = require('../models/marker');
const mongoose = require('mongoose');

// Save a Marker to DB
module.exports = {
  addMarker: (data) => {
    const newMarker = new Marker({
      ...data,
      createdAt: new Date()
    });

    return newMarker.save()
  },

  // Get Markers
  getMarkers: () => {
    return Marker.find()
  },

  // Delete Maker
  deleteMarker: (id) => {
    return Marker.findOneAndRemove({ _id: new mongoose.mongo.ObjectID(id) })
  }
}