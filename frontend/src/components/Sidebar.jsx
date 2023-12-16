// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="left-sidebar">
      {/* Sidebar scroll*/}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <a href="./index.html" className="text-nowrap logo-img">
            <img src="/img/logos/dark-logo.svg" width={180} alt="" />
          </a>
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8" />
          </div>
        </div>
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav scroll-sidebar" data-simplebar>
          <ul id="sidebarnav">
            <li className="sidebar-item">
              <a className="sidebar-link" href="./ui-buttons.html" aria-expanded="false">
                <span>
                  <i className="ti ti-article" />
                </span>
                <span className="hide-menu">İlan Olustur</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./ui-alerts.html" aria-expanded="false">
                <span>
                  <i className="ti ti-alert-circle" />
                </span>
                <span className="hide-menu">Kayitli Kisiler</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./ui-card.html" aria-expanded="false">
                <span>
                  <i className="ti ti-cards" />
                </span>
                <span className="hide-menu">Bilgiler</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./ui-forms.html" aria-expanded="false">
                <span>
                  <i className="ti ti-file-description" />
                </span>
                <span className="hide-menu">Forms</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="./ui-typography.html" aria-expanded="false">
                <span>
                  <i className="ti ti-typography" />
                </span>
                <span className="hide-menu">Typography</span>
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
