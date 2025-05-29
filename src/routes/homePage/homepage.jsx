import React, { useEffect, useCallback } from "react";
import "./homepage.css";
import logo from "../../assets/nowa_typo_logo.png";
import symbol from "../../assets/globe.png";
import nowasymbol from "../../assets/nowa_symbol.png";
import ceo from "../../assets/ceo.jpg";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "Solutions", href: "#" },
  { label: "Ideas", href: "#" },
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
        <div className="hero__main-text">
          <h1 className="hero__headline">
            LET’S CHANGE{" "}
            <img src={nowasymbol} alt="Nowa Symbol" className="hero__icon" />
            <br />
            THE WORLD TOGETHER
          </h1>
          <p className="hero__quote">
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock.
          </p>
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

      <section className="ceo-section">
        <div className="ceo__content">
          <img src={ceo} alt="CEO" className="ceo__image" />
          <p className="ceo__name">Nischal Niroula, Chief Executive Officer</p>
          <p className="ceo__message">
            At Nowa, we believe in the power of bold ideas and human-centered
            innovation. We're not just building software — we're building
            solutions that empower people, reshape industries, and move the
            world forward. Join us in turning technology into meaningful change.
          </p>
        </div>
      </section>

      <section className="features-section">
        {/* Optional Intro */}
        <p className="features-section__intro">
          Changing the world isn’t just a goal — it’s a process. Here’s how Nowa
          Technologies helps you build the future, one system at a time.
        </p>

        {/* Top Row */}
        <div className="features-row">
          <div className="feature feature--primary">
            <h2>
              Custom Tech, <span>Global Impact</span>
            </h2>
            <h4>Solutions Tailored to What Matters</h4>
            <p>
              We help visionary teams build technology that solves real-world
              challenges — fast. From idea to execution, Nowa delivers tailored,
              high-impact solutions powered by AI, automation, and bold
              thinking.
            </p>
          </div>

          <div className="feature feature--tech">
            <div className="feature__icons">
              <img src="src/icons/react_icon.png" alt="react" />
              <img src="src/icons/python_logo.png" alt="python" />
              <img src="src/icons/node_logo.png" alt="node" />
              <img src="src/icons/swift_logo.png" alt="swift" />
              <img src="src/icons/aws_logo.png" alt="aws" />
              <img src="src/icons/openai_logo.png" alt="openai" />
            </div>
            <h4>Engineering the Future</h4>
            <p>
              At Nowa, we don’t just write code — we build what’s next. Using
              the best of modern tech stacks, we create reliable, intelligent,
              and scalable solutions that drive long-term transformation.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="features-row">
          <div className="feature feature--ecosystem">
            <h4>Everything Works Better, Together</h4>
            <p>
              We bridge systems, people, and technologies so you can focus on
              building — not fixing. Our tech integrates effortlessly across
              tools and teams to deliver seamless innovation at scale.
            </p>
          </div>

          <div className="feature feature--research">
            <h4>Smarter Decisions. Faster Outcomes.</h4>
            <p>
              Nowa’s AI-powered research and automation tools help organizations
              cut through complexity — uncovering insights, generating content,
              and accelerating what’s possible.
            </p>
          </div>
        </div>
      </section>

      <section className="teams-section">
        <div className="teams-header">
          <div>
            <h2>
              Meet Our <span>Core Team</span>
            </h2>
            <p>
              Our teams bring together experienced talent and inspirational new
              voices to build a collaborative space to learn and grow.
            </p>
          </div>
          <a href="/careers" className="teams-link">
            Careers &rarr;
          </a>
        </div>

        <div className="teams-grid">
          <div className="team-card">
            <img src="/images/nischal_ceo.jpg" alt="Business Development" />
            <h4>Nischal Niroula</h4>
            <p>CEO</p>
          </div>

          <div className="team-card">
            <img src="/images/team2.jpg" alt="Customer Support" />
            <h4>Arun Pandey</h4>
            <p>Senior Software Developer</p>
          </div>

          <div className="team-card">
            <img src="/images/team3.jpg" alt="Marketing" />
            <h4>Nhuja Shakya</h4>
            <p>Senior IOS Developer</p>
          </div>

          <div className="team-card">
            <img src="/images/team4.jpg" alt="Engineering & Product Dev" />
            <h4>Engineering & Product Dev</h4>
            <p>2 open positions</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="features-cta-banner">
          <p className="features-cta-text">
            Discover how Nowa Technologies can help shape your next breakthrough
          </p>
          <button className="header__cta">Explore Solutions</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <img
              src="/images/nowa_symbol.png"
              alt="Nowa Logo"
              className="footer-logo"
            />
            <nav className="footer-links">
              <a href="/privacy">Privacy Notice</a>
              <a href="/cookies">Cookie Policy</a>
            </nav>
          </div>

          <div className="footer-right">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              in
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              ◎
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>123 Nowa Street, Suite 202, Melbourne, VIC 3000, Australia</p>
          <p>All rights reserved © 2024 Nowa Technologies</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
