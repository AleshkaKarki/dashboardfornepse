import React, { useState } from 'react';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
         
        </div>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item' onClick={toggleOptions}>
          <a href="#">
            Home
          </a>
          {showOptions && (
            <ul className="sub-menu">
            </ul>
          )}
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            Manage Portfolio
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            Manage Watchlist
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            Logout
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
