import React from 'react';
import logo from '../assets/blogme-logo-zip-file/png/logo-no-background.png'; // Adjust the path as needed

function Logo({ width = '100px' }) {
  return (
    <img 
      src={logo} 
      alt="Logo" 
      style={{ width }} 
      className="object-contain"
    />
  );
}

export default Logo;
