import { useEffect, useState } from 'react';
import ParcelForm from './components/ParcelForm';
import ParcelList from './components/ParcelList';
import SearchParcel from './components/SearchParcel';
import axios from 'axios';
import './App.css';


function App() {
  const [parcels, setParcels] = useState([]);
  const [searchedParcel, setSearchedParcel] = useState(null);

  const fetchParcels = async () => {
    const res = await axios.get('/parcels');
    setParcels(res.data);
  };

  useEffect(() => {
    fetchParcels();
  }, []);

  const addParcel = async (trackingId, name) => {
    await axios.post('/parcels', { trackingId, name });
    fetchParcels();
  };

  const deleteParcel = async (id) => {
    await axios.delete(`/parcels/${id}`);
    fetchParcels();
  };

  const editParcel = async (id, data) => {
  await axios.put(`/parcels/${id}`, data);
  fetchParcels();
  };


  const searchParcel = async (trackingId) => {
    try {
      const res = await axios.get(`/parcels/${trackingId}`);
      setSearchedParcel(res.data);
    } catch (err) {
      setSearchedParcel(null);
      alert("Parcel not found!");
    }
  };

  return (
    <div className="container mt-4">
    <div className="row align-items-center mb-4">
      <div className="col-md-6 d-flex align-items-center">
        <img src="/images/logo.png" alt="Logo" width="85" height="85" className="me-2" />
        <h2 className="mb-0 site-title">Zero Mile Delivery</h2>
         <small className="site-tagline">Deliver Smarter. Track Faster.</small>
      </div>
      <div className="col-md-6">
        <SearchParcel onSearch={searchParcel} parcel={searchedParcel} />
      </div>
    </div>

    <ParcelForm onSubmit={addParcel} />
    <ParcelList parcels={parcels} onDelete={deleteParcel} onEdit={editParcel} />
  </div>

  );
}

export default App;
