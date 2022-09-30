// import searchIcon from '../../images/search-normal.svg';
// import notificationIcon from '../../images/notification-bing.svg';
import './topbar.css';
import React from 'react'
// import React from 'react'


const TopBar = ({ name }) => {
  const userAvatar = require('../../images/bg.jpg');
  return (
    <header class="top-bar">
      <div class="welcome-back">
        <h3>Welcome, {name ? name : ""} 😃</h3>
        <p>Comrade, what's popping cheif ?!</p>
      </div>
      <div class="top-bar-cta">
        {/* <span class="search-btn">
          <button type="button">
            <img src={searchIcon} alt="" />
          </button>
        </span>
        <span>
          <button type="submit">
            <img src={notificationIcon} alt="" />
          </button>
        </span> */}
        <div class="profile-settings">
          <img src={userAvatar} alt="" />
          {/* <iconify-icon
            class="iconify-dropdown"
            icon="ri:arrow-drop-down-line"
          ></iconify-icon> */}
        </div>
      </div>
    </header>
  );
};

export default TopBar;
