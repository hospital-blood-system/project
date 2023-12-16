// Dasboard.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard = () => {
  return (
    <div>
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />
        <div className="body-wrapper">
          <Header />
          <div className="container-fluid">
            {/* İçerik alanı */}
            <h1>Burası içerik alanı</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
