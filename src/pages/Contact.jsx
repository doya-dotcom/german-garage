import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <header className="contact-hero d-flex align-items-center justify-content-center text-center text-light">
        <div className="overlay"></div>
        <div className="container position-relative">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">We’d love to hear from you</p>
        </div>
      </header>

      {/* Contact Info + Form + Map */}
      <section className="container py-5">
        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-md-5" data-aos="fade-right">
            <h3 className="fw-bold mb-4">Get in Touch</h3>
            <p className="mb-3">
              <i className="bi bi-telephone-fill text-primary me-2"></i>
              <strong>Phone:</strong> +251 911 603 851
            </p>
            <p className="mb-3">
              <i className="bi bi-telephone-fill text-primary me-2"></i>
              <strong>Phone:</strong> +251 942 378 614
            </p>
            <p className="mb-3">
              <i className="bi bi-envelope-fill text-danger me-2"></i>
              <strong>Email:</strong> aberabisrat232@gmail.com
            </p>
            <p className="mb-3">
              <i className="bi bi-geo-alt-fill text-success me-2"></i>
              <strong>Address:</strong> Sheger city, Ethiopia
            </p>
               <p className="mb-3">
              <i className="bi bi-geo-alt-fill text-success me-2"></i>
              <strong>Address on map:</strong> 9°04'19.9"N 38°53'55.1"E
            </p>
          </div>

          {/* Contact Form + Map */}
          <div className="col-md-7" data-aos="fade-left">
            <h3 className="fw-bold mb-4">Send Us a Message</h3>
          

            {/* Google Map Embed */}
            <div className="map-container shadow rounded overflow-hidden">
              <iframe
                title="German Garage Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d210.6542446364572!2d38.898667124121!3d9.07217324585002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2set!4v1759047386062!5m2!1sen!2set"
                width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="text-center mt-3">
                <a
                  href="https://maps.app.goo.gl/9sy3idDBLkCtmEd9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
