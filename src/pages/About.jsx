import React from "react";
import "../styles/about.css"; // custom styles
import { Carousel } from "react-bootstrap";

// Import local images for slideshow
import car1 from "../assets/cars/car1.jpg";
import car2 from "../assets/cars/car2.jpg";
import car3 from "../assets/cars/car3.jpg";
import car4 from "../assets/cars/car4.jpg";
import car5 from "../assets/cars/car5.jpg";
import car6 from "../assets/cars/car6.jpg";
import car7 from "../assets/cars/car7.jpg";
import car8 from "../assets/cars/car8.jpg";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <header className="about-hero d-flex align-items-center justify-content-center text-center text-light">
        <div className="overlay"></div>
        <div className="container position-relative" data-aos="fade-up">
          <h1 className="display-4 fw-bold">About German Garage</h1>
          <p className="lead">Precision, Care & Trust Since 19XX</p>
        </div>
      </header>

      {/* Content Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Text */}
          <div className="col-md-6 mb-4" data-aos="fade-right">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p className="text">
              German Garage is dedicated to <strong>professional maintenance and repair of vehicles</strong>,
              bringing decades of mechanical expertise to our community. Since our founding in{" "}
              <strong>[Year]</strong>, we have grown into one of the most trusted
              automotive service providers in Ethiopia.
            </p>
            <p className="text-muted">
              Currently managed by <strong>General Manager Bisrat Abera</strong>, our team of certified technicians
              specializes in brands such as Volkswagen, Toyota, Suzuki, Terios, Chevrolet, Hyundai, Mercedes-Benz,
              Honda, BMW, and many others.
            </p>
          </div>

          {/* Slideshow */}
          <div className="col-md-6" data-aos="fade-left">
            <Carousel fade interval={1000} controls={true} indicators={true}>
              <Carousel.Item>
                <img className="d-block w-100 rounded shadow" src={car1} alt="Car 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 rounded shadow" src={car2} alt="Car 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 rounded shadow" src={car3} alt="Car 3" />
              </Carousel.Item>
                  <Carousel.Item>
                <img className="d-block w-100 rounded shadow" src={car4} alt="Car 4" />
              </Carousel.Item>
                  <Carousel.Item>
                <img className="d-block w-100 rounded shadow" src={car5} alt="Car 5" />
              </Carousel.Item>
                  <Carousel.Item>
                <img className="d-block w-100 rounded shadow" src={car6} alt="Car 6" />
              </Carousel.Item>
                  <Carousel.Item>
                <img className="d-block w-100 rounded shadow" src={car7} alt="Car 7" />
              </Carousel.Item>
                  <Carousel.Item>
                <img className="d-block w-100 rounded shadow" src={car8} alt="Car 8" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-5" data-aos="fade-down">Our Mission & Values</h2>
          <div className="row g-4">
            <div className="col-md-4" data-aos="zoom-in">
              <div className="p-4 shadow rounded bg-white h-100">
                <i className="bi bi-tools fs-1 text-primary mb-3"></i>
                <h5>Expert Repairs</h5>
                <p className="text-muted">Accurate diagnostics, reliable repairs, and transparent service.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="p-4 shadow rounded bg-white h-100">
                <i className="bi bi-shield-check fs-1 text-success mb-3"></i>
                <h5>Trust & Integrity</h5>
                <p className="text-muted">Built on honest pricing and long-term customer relationships.</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
              <div className="p-4 shadow rounded bg-white h-100">
                <i className="bi bi-car-front-fill fs-1 text-danger mb-3"></i>
                <h5>Passion for Cars</h5>
                <p className="text-muted">We are car enthusiasts at heart, committed to your vehicle’s best performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
