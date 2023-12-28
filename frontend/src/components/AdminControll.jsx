// AdminControll.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './Dasboard';

function AdminControll() {
  const [admins, setAdmins] = useState([]);

  const handleAdmins = async () => {
    try {
      const response = await axios.get('http://localhost:8002/admin');
      setAdmins(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleAdmins();
  }, []);

  return (
    <Dashboard>
        <div className="container my-5 p-4 rounded border shadow">
        <h3 className="display-5 fw-bold text-primary text-center mb-4">Admin Listesi</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '16px'
      }}>
        {admins.map(admin => (
          <div key={admin._id} style={{
            border: '1px solid #ddd',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <p>Name: {admin.ad}</p>
            <p>Surname: {admin.soyad}</p>
            <p>personel numarası: {admin.personal_no}</p>
            <p>Hospital: {admin.hastane ? admin.hastane.ad : 'N/A'}</p>
          </div>
        ))}
      </div>
      </div>
    </Dashboard>
  );
}

export default AdminControll;
