import React, { useEffect, useCallback } from "react";
import "./homepage.css";
import logo from "../../assets/nowa_typo_logo.png";
import symbol from "../../assets/nowa_symbol.png";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "Solutions", href: "#" },
  { label: "Ideas", href: "#" },
  { label: "Teams", href: "#" },
  { label: "Career", href: "#" },
];

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="Nowa Logo" width="120" height="40" />
        </div>

        <nav className="header__nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={item.active ? "active" : ""}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="header__cta">Let's Talk</button>
      </header>
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">
            Transforming <span className="text-highlight">Ideas</span> Into
            Digital Reality
          </h1>
          <p className="hero__subtitle">
            We craft innovative digital solutions that drive growth and
            transform businesses in the modern landscape.
          </p>
          <div className="hero__buttons">
            <button className="hero__cta hero__cta--primary">
              Get Started
            </button>
            <button className="hero__cta hero__cta--secondary">
              Learn More
            </button>
          </div>
          <div className="hero__stats">
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-container">
            <img
              src={symbol}
              alt="Innovative Digital Solutions"
              className="hero__image"
            />
            <div className="hero__image-overlay"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
