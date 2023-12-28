// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';


const Sidebar = () => {
  return (
    <aside className="left-sidebar">
      {/* Sidebar scroll*/}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-center">
          <a href="./index.html" className="text-nowrap logo-img">
            <Logo></Logo>
          </a>
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8" />
          </div>
        </div>
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav scroll-sidebar" data-simplebar>
          <ul id="sidebarnav">
            <li className="sidebar-item">
              <a className="sidebar-link" href="/announcement" aria-expanded="false">
              <Link to="/announcement" className="sidebar-link">
                <span>
                  <i className="ti ti-article" />
                </span>
                <span className="hide-menu">İlanlar</span>
              </Link>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/Donor" aria-expanded="false">
              <Link to="/Donor" className="sidebar-link">
                <span>
                  <i className="ti ti-article" />
                </span>
                <span className="hide-menu">Donor</span>
              </Link>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/Statistic" aria-expanded="false">
              <Link to="/Statistic" className="sidebar-link">
                <span>
                  <i className="ti ti-article" />
                </span>
                <span className="hide-menu">E-Mailler</span>
              </Link>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/AdminControll" aria-expanded="false">
              <Link to="/AdminControll" className="sidebar-link">
                <span>
                  <i className="ti ti-article" />
                </span>
                <span className="hide-menu">Hastane İşlemleri </span>
              </Link>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="/Settings" aria-expanded="false">
              <Link to="/Settings" className="sidebar-link">
                <span>
                  <i className="ti ti-article" />
                </span>
                <span className="hide-menu">Ayarlar</span>
              </Link>
              </a>
            </li>
          </ul>
          <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
            <div className="d-flex">
              <div className="unlimited-access-title me-3">
                <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">Berat Kurtaran</h6>
              </div>
              <div className="unlimited-access-img">
                <img src="img/backgrounds/rocket.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </aside>
  );
};

export default Sidebar;
