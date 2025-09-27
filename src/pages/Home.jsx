import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import hhh from "../assets/homebk.jpg"; // hero background

export default function Home() {
  return (
    <main>
      {/* Hero with Slideshow */}
      <header className="hero-section position-relative">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={hhh} className="d-block w-100 hero-img" alt="Garage 1" />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d"
                className="d-block w-100 hero-img"
                alt="Garage 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1515923152115-758a5d02b29f"
                className="d-block w-100 hero-img"
                alt="Garage 3"
              />
            </div>
          </div>
        </div>

        <div className="hero-overlay"></div>
        <div className="container text-center hero-content" data-aos="fade-up">
          <h1 className="display-3 fw-bold text-light">German Garage</h1>
          <p className="lead mb-4 text-light">
            Precision repairs, honest pricing — expert care for your vehicle.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/contact" className="btn btn-primary btn-lg shadow">
              Book Service
            </Link>
            <Link to="/about" className="btn btn-outline-light btn-lg shadow">
              Learn More
            </Link>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="py-5 bg-dark text-light">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-down">
            Our Services
          </h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="zoom-in">
              <div className="service-card p-4 h-100 shadow-lg text-dark">
                <h5 className="fw-bold">Diagnostics & Repair</h5>
                <p>Modern diagnostics equipment — fast, accurate repair.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="service-card p-4 h-100 shadow-lg text-dark">
                <h5 className="fw-bold">Scheduled Maintenance</h5>
                <p>Oil change, brakes, tires, belts — keep your car healthy.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
              <div className="service-card p-4 h-100 shadow-lg text-dark">
                <h5 className="fw-bold">Performance & Tuning</h5>
                <p>Engine and suspension tuning for performance and longevity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up">
            Why Choose German Garage
          </h2>
          <div className="row g-4 text-dark">
            <div className="col-md-4" data-aos="flip-left">
              <div className="p-4 text-center shadow rounded bg-white h-100">
                <h5>Experienced Technicians</h5>
                <p>Trained mechanics specializing in different vehicles.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="flip-up" data-aos-delay="200">
              <div className="p-4 text-center shadow rounded bg-white h-100">
                <h5>Quality Parts</h5>
                <p>OEM-quality parts and transparent repair quotes.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="flip-right" data-aos-delay="400">
              <div className="p-4 text-center shadow rounded bg-white h-100">
                <h5>Customer Support</h5>
                <p>Friendly service and reliable follow-up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
