const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/parcel.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS parcels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    trackingId TEXT UNIQUE,
    name TEXT
  )`);
});

module.exports = db;
