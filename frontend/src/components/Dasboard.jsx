// Dashboard.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard = ({ children }) => {
  return (
    <div>
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
        <Sidebar />
        <div className="body-wrapper">
          <Header />
          <div className="container-fluid">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
