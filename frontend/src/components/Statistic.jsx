import React, { useState, useEffect } from 'react';
import Dashboard from './Dasboard';
import axios from 'axios';

function Statistic() {
  const [donorList, setDonorList] = useState([]);

  const fetchDonors = async () => {
    try {
      const response = await axios.get('http://localhost:8003/donor/');
      const indexedData = response.data;
      setDonorList(indexedData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []); // Use an empty dependency array to run the effect only once on component mount

  const handleSendEmail = (email) => {
    // Implement your logic to send an email using the provided email address
    console.log(`Sending email to: ${email}`);
  };

  return (
    <Dashboard>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      </div>

      <div>
      <h3 className="display-5 fw-bold text-primary text-center mb-4">Donor Listesi</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Ad</th>
              <th style={tableHeaderStyle}>Kan Grubu</th>
              <th style={tableHeaderStyle}>Email</th>
              <th style={tableHeaderStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(donorList) &&
              donorList.map((donor) => (
                <tr key={donor._id} style={tableRowStyle}>
                  <td style={tableCellStyle}>{donor.ad}</td>
                  <td style={tableCellStyle}>{donor.blood_type}</td>
                  <td style={tableCellStyle}>{donor.iletisim}</td>
                  <td style={tableCellStyle}>
                    <button style={emailButtonStyle} onClick={() => handleSendEmail(donor.iletisim)}>
                      Email Gönder
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Dashboard>
  );
}

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const tableHeaderStyle = {
  background: '#f2f2f2',
  border: '1px solid #ddd',
  padding: '12px',
};

const tableRowStyle = {
  border: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '12px',
};

const emailButtonStyle = {
  background: '#4CAF50',
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default Statistic;
