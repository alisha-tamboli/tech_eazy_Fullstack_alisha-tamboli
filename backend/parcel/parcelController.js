const express = require('express');
const router = express.Router();
const service = require('./parcelService');

router.post('/', (req, res) => {
   console.log("Incoming body:", req.body);
  const { trackingId, name } = req.body;
  service.createParcel(trackingId, name, function (err) {
    if (err) return res.status(400).json({ error: err.message });
    res.status(201).json({ message: 'Parcel created' });
  });
});

router.get('/', (req, res) => {
  service.getAllParcels((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

router.get('/:trackingId', (req, res) => {
  service.getParcelByTrackingId(req.params.trackingId, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: 'Not found' });
    res.json(row);
  });
});

router.put('/:id', (req, res) => {
  const { trackingId, name } = req.body;
  service.updateParcel(req.params.id, trackingId, name, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Updated' });
  });
});

router.delete('/:id', (req, res) => {
  service.deleteParcel(req.params.id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Deleted' });
  });
});

module.exports = router;
