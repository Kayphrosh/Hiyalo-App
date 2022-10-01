import React from 'react';
import dashboardIcon from '../../images/dashboard.svg';
import buildingsIcon from '../../images/buildings-2.svg';
// import noteIcon from '../../images/note.svg';
import walletIcon from '../../images/wallet-minus.svg';
// import messageIcon from '../../images/message-notif.svg';
import settingsIcon from '../../images/setting-2.svg';
import logo from '../../images/logo.svg';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
// import { useEffect } from 'react';

const SideBar = ({ verified }) => {

  // useEffect(() => {
  //   console.log(window.location)
  // }, [])

  return (
    <aside class="side-bar">
      <div class="dashboard-logo">
        <img src={logo} alt="" />
      </div>
      <nav class="dashboard-navbar">
        <ul class="dashboard-nav-links">

          <li>
            <NavLink to="/dashboard" className="side-bar-link" id={window.location.pathname === "/dashboard" ? "active" : ""} >
              <img src={dashboardIcon} alt="" />
              <p>Overview</p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/apartments" className="side-bar-link" id={window.location.pathname === "/apartments" ? "active" : ""} >
              <img src={buildingsIcon} alt="" />
              <p>Apartment</p>
            </NavLink>

          </li>
          {/* <li>
            <NavLink to="#">
              <img src={noteIcon} alt="" />
              <span>Services</span>
            </NavLink>
          </li> */}

          <li>
            <NavLink to="/payments" className="side-bar-link" id={window.location.pathname === "/payments" ? "active" : ""} >
              <img src={walletIcon} alt="" />
              <p>Payments</p>
            </NavLink>
          </li>

          {/* <li>
            <NavLink href="#">
              <img src={messageIcon} alt="" />
              <span>Messages</span>
            </NavLink>
          </li> */}

          <li className='badger'>
            <NavLink to="/settings" className={verified === true ? "side-bar-link" : "side-bar-link badge"} id={window.location.pathname === "/settings" ? "active" : ""} >
              <img src={settingsIcon} alt="" />
              <p>Settings</p>
            </NavLink>
          </li>

        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
