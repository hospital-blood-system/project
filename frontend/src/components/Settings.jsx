import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboard from './Dasboard'
const mongoose = require('mongoose');
console.log(mongoose)
function Settings(){
    const [username, setUsername] = useState('');
  const [lastName, setLastName] = useState('');
  const [personelNo, setPersonelNo] = useState('');
  const [oldpassword, setoldPassword] = useState('');
  const [newpassword, setnewPassword] = useState('');
  
  return (
    <Dashboard>
      <h1>
        Kullanıcı Ayarları
      </h1>
      <form>
        <label>
          Ad:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            class = "form-control"
          />
        </label>
        <br />
        <label>
          Soyad:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            class = "form-control"
          />
        </label>
        <br />
        <label>
          Personel No:
          <input
            type="text"
            value={personelNo}
            onChange={(e) => setPersonelNo(e.target.value)}
            class = "form-control"
          />
        </label>
        <br />
        <label>
          Eski Şifre:
          <input
            type="password"
            value={oldpassword}
            onChange={(e) => setoldPassword(e.target.value)}
            class = "form-control"
          />
        </label>
        <br />
        <label>
          Yeni şifre:
          <input
            type="password"
            value={newpassword}
            onChange={(e) => setnewPassword(e.target.value)}
            class = "form-control"
          />
        </label>
        <br />
        <br></br>
        <button class = "btn btn-success">
    Güncelle
        </button>
      </form>
    </Dashboard>
  );
}


export default Settings; 