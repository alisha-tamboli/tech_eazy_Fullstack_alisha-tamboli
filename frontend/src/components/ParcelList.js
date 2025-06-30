import React, { useState } from 'react';
import './ParcelList.css';

function ParcelList({ parcels, onDelete, onEdit }) {
  const [editingId, setEditingId] = useState(null);
  const [updatedTrackingId, setUpdatedTrackingId] = useState('');
  const [updatedName, setUpdatedName] = useState('');

  const handleEditClick = (parcel) => {
    setEditingId(parcel.id);
    setUpdatedTrackingId(parcel.trackingId);
    setUpdatedName(parcel.name);
  };

  const handleUpdate = () => {
    onEdit(editingId, { trackingId: updatedTrackingId, name: updatedName });
    setEditingId(null);
  };

  return (
    <div className="parcel-list mt-4">
      <h4>📋 All Parcels</h4>
      {parcels.length === 0 ? (
        <p>No parcels found.</p>
      ) : (
        <table className="table table-striped table-hover table-bordered">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Tracking ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           {parcels.map((p, index) => (
                <tr key={p.id}>
                <td>{index + 1}</td>
                <td>
                  {editingId === p.id ? (
                    <input
                      value={updatedTrackingId}
                      onChange={(e) => setUpdatedTrackingId(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    p.trackingId
                  )}
                </td>
                <td>
                  {editingId === p.id ? (
                    <input
                      value={updatedName}
                      onChange={(e) => setUpdatedName(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    p.name
                  )}
                </td>
                <td>
                  {editingId === p.id ? (
                    <button className="btn btn-success btn-sm me-2" onClick={handleUpdate}>
                      Save
                    </button>
                  ) : (
                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(p)}>
                      Edit
                    </button>
                  )}
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                        if (window.confirm("Are you sure you want to delete this parcel?")) {
                        onDelete(p.id);
                        }
                    }}
                    >
                    Delete
                </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ParcelList;
