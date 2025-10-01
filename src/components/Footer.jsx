import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/testwe.jpg"; // ✅ your logo

export default function Footer() {
  return (
    <footer className="footer text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* Logo + About */}
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="German Garage Logo" className="footer-logo me-2" />
              <h5 className="mb-0 fw-bold">German Garage</h5>
            </div>
            <p className="small">
              Precision repairs, honest pricing — expert care for your vehicle. 
              Specialized different cars with experienced technicians.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <p className="small mb-1"><i className="bi bi-telephone-fill me-2"></i> +251 911 603 851</p>
            <p className="small mb-1"><i className="bi bi-telephone-fill me-2"></i> +251 942 378 614</p>
            <p className="small mb-1"><i className="bi bi-envelope-fill me-2"></i> aberabisrat232@gmail.com</p>
            <p className="small"><i className="bi bi-geo-alt-fill me-2"></i> Sheger city, Ethiopia</p>

            {/* Social Media */}
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="footer-social"><i className="bi bi-facebook"></i></a>
              <a href="#" className="footer-social"><i className="bi bi-instagram"></i></a>
              <a href="#" className="footer-social"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="footer-social"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 pt-3 border-top border-secondary small">
          © {new Date().getFullYear()} German Garage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
