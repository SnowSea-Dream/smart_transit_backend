const express = require('express');
const router = express.Router();
const services = require('../services/markers');

/* GET users listing. */
router.get('/', (req, res, next) => {
  services.getMarkers()
    .then(markers => res.status(200).json({ status: 200, markers }))
    .catch(err => {
      console.log(err)
    })
});

router.post('/', (req, res, next) => {
  const marker = req.body.marker;
  if (!marker) {
    return res.status(400).json({ status: 400, message: 'Missing Information.' })
  }

  services.addMarker(marker)
    .then(marker => res.status(200).json({ status: 200, marker }))
})

router.delete('/', (req, res, next) => {
  const id = req.body.id;
  if (!id) {
    return res.status(400).json({ status: 400, message: 'Missing Information.' })
  }

  services.deleteMarker(id)
    .then(marker => res.status(200).json({ status: 200, marker }))
})

module.exports = router;
