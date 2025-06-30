import React, { useState } from 'react';
import './SearchParcel.css';

function SearchParcel({ onSearch, parcel }) {
  const [trackingId, setTrackingId] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (trackingId) {
      onSearch(trackingId);
    }
  };

  return (
    <div className="search-parcel mb-4">
      <form className="input-group mb-2" onSubmit={handleSearch}>
        <input
          type="text"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          className="form-control"
          placeholder="Search by Tracking ID"
        />
        <button type="submit" className="btn-search btn btn-warning btn-sm me-2">
           <i className="bi bi-search fs-5"></i>
        </button>
      </form>

      {parcel && (
        <div className="alert alert-info">
          <strong>Result:</strong> [{parcel.trackingId}] {parcel.name}
        </div>
      )}
    </div>
  );
}

export default SearchParcel;
