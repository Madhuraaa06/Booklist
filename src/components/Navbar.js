import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container-fluid">

          <Link to="/">
            <img src='/images/logo.png' alt="Logo"></img>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fa-solid fa-ellipsis-vertical" style={{ color: '#8f0000' }}></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/explore" className="nav-link">Explore</Link>
              </li>
            </ul>
            <Link to="/profile" className="nav-link">
          <img src='/images/profile.png' alt="Profile" />
        </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
