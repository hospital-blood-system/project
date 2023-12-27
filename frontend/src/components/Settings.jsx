import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './Dasboard'; // Make sure the import path is correct

function Settings() {
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [personelNo, setPersonelNo] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    // Fetch user data from the API
    axios.get('http://localhost:8002/admin')
      .then(response => {
        setUserId(response.data._id);
        setUsername(response.data.ad);
        setLastName(response.data.soyad); // Corrected the property name
        setPersonelNo(response.data.personal_no); // Corrected the property name
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send update request to the API
    axios.put(`http://localhost:8002/admin/${userId}`, {
      ad: username,
      soyad: lastName,
      personal_no: personelNo,
      oldpassword: oldPassword,
      newpassword: newPassword,
    })
      .then(response => {
        console.log(response);
        alert('Kullanıcı bilgileri güncellendi.');
        window.location.reload();
      })
      .catch(error => {
        console.error('Error updating user data:', error);
        alert('Kullanıcı bilgileri güncellenemedi.');
        window.location.reload();
      });
  };

  return (
<Dashboard>
  <div className="container mt-5">
    <div className="card shadow-lg rounded">
      <div className="card-body">
        <h1 className="card-title text-center mb-4" style={{ fontSize: '2.5rem', fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold', color: '#333' }}>
          Kullanıcı Ayarları
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '1.2rem', color: '#555' }}>
              Ad:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastName" className="form-label" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '1.2rem', color: '#555' }}>
              Soyad:
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="oldPassword" className="form-label" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '1.2rem', color: '#555' }}>
              Eski Şifre:
            </label>
            <input
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '1.2rem', color: '#555' }}>
              Yeni şifre:
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-4 d-grid">
            <button type="submit" className="btn btn-secondary btn-lg">
              <i className="bi bi-arrow-clockwise"></i> Güncelle
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</Dashboard>

  );
}

export default Settings;
