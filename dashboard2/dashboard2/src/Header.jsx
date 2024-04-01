import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        {/* <BsJustify className='icon' onClick={OpenSidebar} /> */}
      </div>
      <div className='header-content'>
        <h1 className="header-heading">Portfolio Tracker</h1>
        <h2 className="header-subheading">Hello, User</h2>
      </div>
      {/* Add other header elements if needed */}
      {/* <div className='header-left'>
        <BsSearch className='icon' />
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' />
      </div> */}
    </header>
  );
}

export default Header;
