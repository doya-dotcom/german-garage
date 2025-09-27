import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/testwe.jpg"; // ✅ your logo image

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="German Garage Logo" className="nav-logo me-1" />
          
          <span className="fw-bold text-light">German Garage</span>
        </Link>

        {/* Navigation Links */}
        <div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
