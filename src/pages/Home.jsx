import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background */}
      <header
        className="relative bg-cover bg-center h-screen text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Navbar */}
        <nav className="relative z-10 flex justify-between items-center px-10 py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/garage.png"
              alt="Garage Logo"
              className="h-10 w-10"
            />
            <h1 className="text-2xl font-bold tracking-wide">German Garage</h1>
          </div>

          {/* Nav Links */}
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            Welcome to German Garage 🚗
          </h2>
          <p className="text-lg md:text-2xl max-w-2xl">
            Premium car repair and maintenance services – trusted by thousands.
          </p>
          <a
            href="#contact"
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition"
          >
            Book an Appointment
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="flex-1 bg-gray-100 py-20 px-6 md:px-20">
        <h3 className="text-3xl font-bold text-center mb-8">About Us</h3>
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-700">
          At German Garage, we provide expert diagnostics, repairs, and
          maintenance for all car models with a focus on German engineering.
          Whether you need a simple oil change or a full engine rebuild, our
          certified mechanics have you covered.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20 px-6 md:px-20">
        <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg mb-4">📍 Addis Ababa, Ethiopia</p>
          <p className="text-lg mb-4">📞 +251 911 234 567</p>
          <p className="text-lg mb-4">✉️ info@germangarage.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} German Garage. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
