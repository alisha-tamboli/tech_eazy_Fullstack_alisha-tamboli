const db = require('./parcelModel');

const createParcel = (trackingId, name, callback) => {
  const stmt = `INSERT INTO parcels (trackingId, name) VALUES (?, ?)`;
  db.run(stmt, [trackingId, name], callback);
};

const getAllParcels = (callback) => {
  db.all(`SELECT * FROM parcels`, [], callback);
};

const getParcelByTrackingId = (trackingId, callback) => {
  db.get(`SELECT * FROM parcels WHERE trackingId = ?`, [trackingId], callback);
};

const deleteParcel = (id, callback) => {
  db.run(`DELETE FROM parcels WHERE id = ?`, [id], callback);
};

const updateParcel = (id, trackingId, name, callback) => {
  db.run(`UPDATE parcels SET trackingId = ?, name = ? WHERE id = ?`, [trackingId, name, id], callback);
};

module.exports = { createParcel, getAllParcels, getParcelByTrackingId, deleteParcel, updateParcel };
