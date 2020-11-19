import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <h1>AL-Quran</h1>
    </div>
  );
};

export default Navbar;
