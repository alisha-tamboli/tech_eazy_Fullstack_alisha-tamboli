const express = require('express');
const app = express();
const parcelRoutes = require('./parcel/parcelController');

app.use(express.json());

const cors = require('cors');
app.use(cors());

// Routes
app.use('/parcels', parcelRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
