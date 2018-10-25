import React from 'react';

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="badge badge-danger m-2">Total: {totalCounters}</span>
    </nav>
  );
};

export default NavBar;
