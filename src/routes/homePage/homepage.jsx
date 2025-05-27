import React, { useEffect } from "react";
import "./homepage.css";
import globe from "../../assets/globe.png";
import logo from "../../assets/nowa_symbol.png";

const Homepage = () => {
  useEffect(() => {
    const triggerShootingStar = () => {
      const star = document.querySelector(".shooting-star");
      if (!star) return;

      // Restart animation
      star.style.animation = "none";
      void star.offsetWidth; // force reflow
      star.style.animation = "shoot 3s ease-in-out forwards";
    };

    // Trigger on load
    triggerShootingStar();

    // Then every 5 seconds
    const interval = setInterval(triggerShootingStar, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-container">
      {/* Globe background layer with animation */}
      <div className="background-layer">
        <div className="shooting-star-wrapper">
          <div className="shooting-star"></div>
        </div>

        <img src={globe} alt="Globe" className="globe-image" />
        <div className="globe-overlay"></div>
      </div>

      {/* Top Right Navigation with hover effects */}
      <nav className="nav-menu">
        <ul>
          <li>
            <span className="nav-item">Ideas</span>
            <span className="nav-underline"></span>
          </li>
          <li>
            <span className="nav-item">Solutions</span>
            <span className="nav-underline"></span>
          </li>
          <li>
            <span className="nav-item">About</span>
            <span className="nav-underline"></span>
          </li>
          <li>
            <span className="nav-item">Team</span>
            <span className="nav-underline"></span>
          </li>
          <li>
            <span className="nav-item">Career</span>
            <span className="nav-underline"></span>
          </li>
        </ul>
      </nav>

      {/* Hero Title with animation */}
      <div className="hero-text">
        <div className="hero-line">
          <h1 className="hero-title">LET'S CHANGE</h1>
          <img src={logo} alt="Nowa Logo" className="logo-symbol" />
        </div>
        <h1 className="hero-title">THE WORLD TOGETHER</h1>
      </div>

      {/* CTA Section with hover effects */}
      <div className="cta-section">
        <button className="talk-button">
          <span>Let's Talk</span>
          <svg
            className="arrow-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p className="cta-paragraph">
          At Nowa Technology, we don't just write code — we shape ideas into
          real-world impact. Unlike traditional IT agencies, we lead with
          ideation, efficiency, and purpose, helping visionary clients turn
          challenges into solutions. Whether you're building a product,
          launching a startup, or scaling a system, our team brings the skills
          and mindset to make your goals a reality — faster, smarter, and with
          intention.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
