// src/routes/homePage/homepage.jsx
import React from "react";
import "./homepage.css";
import globe from "../../assets/globe.png";
import logo from "../../assets/nowa_symbol.png";

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Globe background layer */}
      <div className="background-layer">
        <img src={globe} alt="Globe" className="globe-image" />
      </div>

      {/* Top Right Navigation */}
      <nav className="nav-menu">
        <ul>
          <li>Ideas</li>
          <li>Solutions</li>
          <li>About</li>
          <li>Team</li>
        </ul>
      </nav>

      {/* Hero Title */}
      <div className="hero-text">
        <div className="hero-line">
          <h1>LET’S CHANGE</h1>
          <img src={logo} alt="Nowa Logo" className="logo-symbol" />
        </div>
        <h1>THE WORLD TOGETHER</h1>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <button className="talk-button">Let’s Talk</button>
        <p>
          At Nowa Technology, we don’t just write code — we shape ideas into
          real-world impact. Unlike traditional IT agencies, we lead with
          ideation, efficiency, and purpose, helping visionary clients turn
          challenges into solutions. Whether you’re building a product,
          launching a startup, or scaling a system, our team brings the skills
          and mindset to make your goals a reality — faster, smarter, and with
          intention.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
