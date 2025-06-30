import { useState } from 'react';
import './ParcelForm.css';

function ParcelForm({ onSubmit }) {
  const [trackingId, setTrackingId] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(trackingId, name);
    setTrackingId('');
    setName('');
  };

  return (
    <div className="card shadow-sm mb-4">
  <div className="card-body">
    <h5 className="card-title mb-3">📦 Add New Parcel</h5>

    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <label className="form-label">Tracking ID</label>
        <input
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          placeholder="e.g., TRK123456"
          className="form-control"
          required
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Parcel Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Pizza, Books, Electronics"
          className="form-control"
          required
        />
      </div>

      <div className="col-12 d-grid d-md-flex justify-content-md-end mt-2">
        <button type="submit" className="btn-form">
         Add Parcel
        </button>
      </div>
    </form>
  </div>
</div>

  );
}

export default ParcelForm;
