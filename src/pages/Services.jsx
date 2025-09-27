import React from "react";
import "../styles/services.css";

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <header className="services-hero text-center text-light d-flex align-items-center justify-content-center">
        <div className="overlay"></div>
        <div className="container position-relative" data-aos="fade-down">
          <h1 className="display-4 fw-bold">Our Services</h1>
          <p className="lead">Precision • Care • Trust — For Every Vehicle</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="container py-5">
        <div className="row g-4">
          {/* Service Item */}
          <div className="col-md-4" data-aos="zoom-in">
            <div className="service-card text-center p-4 shadow-lg h-100">
              <i className="bi bi-tools service-icon text-primary"></i>
              <h5 className="fw-bold mt-3">Diagnostics & Repair</h5>
              <p className="text-muted">
                Using the latest tools to quickly diagnose and repair problems with accuracy.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="service-card text-center p-4 shadow-lg h-100">
              <i className="bi bi-gear-fill service-icon text-success"></i>
              <h5 className="fw-bold mt-3">Engine & Transmission</h5>
              <p className="text-muted">
                Complete engine and transmission repair for performance and longevity.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
            <div className="service-card text-center p-4 shadow-lg h-100">
              <i className="bi bi-fuel-pump service-icon text-danger"></i>
              <h5 className="fw-bold mt-3">Oil Change & Maintenance</h5>
              <p className="text-muted">
                Regular oil changes, brakes, belts, and filters to keep your car healthy.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="600">
            <div className="service-card text-center p-4 shadow-lg h-100">
              <i className="bi bi-car-front service-icon text-warning"></i>
              <h5 className="fw-bold mt-3">Suspension & Tires</h5>
              <p className="text-muted">
                Wheel alignment, tire replacement, and suspension tuning for smooth rides.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="800">
            <div className="service-card text-center p-4 shadow-lg h-100">
              <i className="bi bi-palette-fill service-icon text-info"></i>
              <h5 className="fw-bold mt-3">Body Work & Painting</h5>
              <p className="text-muted">
                Professional dent removal, scratch repair, and full-body painting.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="1000">
            <div className="service-card text-center p-4 shadow-lg h-100">
              <i className="bi bi-lightning-charge service-icon text-dark"></i>
              <h5 className="fw-bold mt-3">Electrical Systems</h5>
              <p className="text-muted">
                Repair of car electronics including batteries, alternators, and wiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-center text-light py-5">
        <div className="overlay"></div>
        <div className="container position-relative" data-aos="fade-up">
          <h2 className="fw-bold mb-3">Need Immediate Assistance?</h2>
          <p className="mb-4">Book your service appointment today and let us take care of your vehicle.</p>
          <a href="/contact" className="btn btn-primary btn-lg shadow">Book Now</a>
        </div>
      </section>
    </div>
  );
}
