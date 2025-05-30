import React, { useEffect } from "react";
import "./homepage.css";
import logo from "../../assets/nowa_typo_logo.png";
import symbol from "../../assets/globe.png";
import nowasymbol from "../../assets/nowa_symbol.png";
import ceo from "../../assets/ceo.jpg";

const navItems = [
  { label: "Home", href: "", active: true },
  { label: "Solutions", href: "solutions" },
  { label: "Ideas", href: "#ideas" },
  { label: "Career", href: "#career" },
];

const Homepage = () => {
  useEffect(() => {
    // Add scroll event listener for header effect
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      } else {
        header.style.backgroundColor = "rgba(0, 0, 0, 0)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = document.querySelector(".shooting-stars-container");
  
    const createShootingStar = () => {
      const star = document.createElement("div");
      star.classList.add("shooting-star-dot");
  
      // Set a random start position
      const startX = Math.random() * -100; // Off-screen
      const startY = Math.random() * -100;
  
      // Set a random trajectory
      const endX = window.innerWidth + 200;
      const endY = window.innerHeight / 2 + Math.random() * 400;
  
      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
  
      // Animate via inline styles
      star.animate(
        [
          {
            transform: `translate(0, 0)`,
            opacity: 1,
          },
          {
            transform: `translate(${endX}px, ${endY}px)`,
            opacity: 0,
          },
        ],
        {
          duration: 1500 + Math.random() * 1000,
          easing: "linear",
        }
      );
  
      container.appendChild(star);
  
      // Remove after animation
      setTimeout(() => {
        container.removeChild(star);
      }, 2000);
    };
  
    // Interval loop with randomized delay
    const launchStar = () => {
      createShootingStar();
      const nextLaunchIn = 2000 + Math.random() * 3000; // Between 2-5 seconds
      setTimeout(launchStar, nextLaunchIn);
    };
  
    launchStar(); // Start
  
    return () => {
      container.innerHTML = ""; 
    };
  }, []);
  

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

        <button className="header__cta pulse-on-hover">Let's Talk</button>
      </header>

      <section className="hero">
        <div className="hero__main-text">
          <h1 className="hero__headline animate-fade-in-up">
            LET'S CHANGE{" "}
            <img
              src={nowasymbol}
              alt="Nowa Symbol"
              className="hero__icon spin-on-hover"
            />
            <br />
            THE WORLD TOGETHER
          </h1>
          <p className="hero__quote animate-fade-in-up delay-1">
  At Nowa, we believe in the transformative power of technology. Together, we can build systems that not only solve today’s problems but create a smarter, more connected future for everyone.
</p>

        </div>
        <div className="shooting-stars-container"></div>



        <div className="hero__visual">
          <div className="hero__image-container">
            <img
              src={symbol}
              alt="Innovative Digital Solutions"
              className="hero__image animate-float"
            />
            <div className="hero__image-overlay"></div>
          </div>
        </div>
      </section>

      <section className="ceo-section">
        <div className="ceo__content">
          <img src={ceo} alt="CEO" className="ceo__image glow-on-hover" />
          <p className="ceo__name">Nischal Niroula, Chief Executive Officer</p>
          <p className="ceo__message animate-fade-in-up delay-2">
            At Nowa, we believe in the power of bold ideas and human-centered
            innovation. We're not just building software — we're building
            solutions that empower people, reshape industries, and move the
            world forward.
          </p>
        </div>
      </section>

      <section className="features-section">
        <p className="features-section__intro animate-fade-in-up delay-3">
          Changing the world isn't just a goal — it's a process. Here's how Nowa
          Technologies helps you build the future, one system at a time.
        </p>

        <div className="features-row">
          <div className="feature feature--primary animate-fade-in-up delay-4">
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

          <div className="feature feature--tech animate-fade-in-up delay-5">
            <div className="feature__icons">
              {["react", "python", "node", "swift", "aws", "openai"].map(
                (tech) => (
                  <div key={tech} className="tech-icon bounce-on-hover">
                    <img src={`/icons/${tech}_logo.png`} alt={tech} />

                  </div>
                )
              )}
            </div>
            <h4>Engineering the Future</h4>
            <p>
              At Nowa, we don't just write code — we build what's next. Using
              the best of modern tech stacks, we create reliable, intelligent,
              and scalable solutions that drive long-term transformation.
            </p>
          </div>
        </div>

        <div className="features-row">
          <div className="feature feature--ecosystem animate-fade-in-up delay-6">
            <h4>Everything Works Better, Together</h4>
            <p>
              We bridge systems, people, and technologies so you can focus on
              building — not fixing. Our tech integrates effortlessly across
              tools and teams to deliver seamless innovation at scale.
            </p>
          </div>

          <div className="feature feature--research animate-fade-in-up delay-7">
            <h4>Smarter Decisions. Faster Outcomes.</h4>
            <p>
              Nowa's AI-powered research and automation tools help organizations
              cut through complexity — uncovering insights, generating content,
              and accelerating what's possible.
            </p>
          </div>
        </div>
      </section>

      <section className="teams-section">
        <div className="teams-header">
          <div>
            <h2 className="animate-fade-in-up delay-8">
              Meet Our <span>Core Team</span>
            </h2>
            <p className="animate-fade-in-up delay-9">
              Our teams bring together experienced talent and inspirational new
              voices to build a collaborative space to learn and grow.
            </p>
          </div>
          <a href="/careers" className="teams-link hover-grow">
            Careers &rarr;
          </a>
        </div>

        <div className="teams-grid">
          {[
            {
              name: "Nischal Niroula",
              role: "CEO",
              img: "/images/nischal_ceo.jpg",
            },
            {
              name: "Arun Pandey",
              role: "Senior Software Developer",
              img: "/images/team2.jpg",
            },
            {
              name: "Nhuja Shakya",
              role: "Senior IOS Developer",
              img: "/images/team3.jpg",
            },
            {
              name: "Biswas Thapa",
              role: "Senior Developer",
              img: "/images/team4.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className={`team-card animate-fade-in-up delay-${10 + index}`}
            >
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="features-cta-banner animate-fade-in-up delay-14">
          <p className="features-cta-text">
            Discover how Nowa Technologies can help shape your next breakthrough
          </p>
          <button className="header__cta pulse-on-hover">
            Explore Solutions
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <img
              src={logo}
              alt="Nowa Logo"
              className="footer-logo"
            />
            <nav className="footer-links">
              <a href="/privacy" className="hover-underline">
                Privacy Notice
              </a>
              <a href="/cookies" className="hover-underline">
                Cookie Policy
              </a>
            </nav>
          </div>

          <div className="footer-right">
            <a
              href="https://www.linkedin.com/company/nowa-technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon hover-grow"
            >
              in
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon hover-grow"
            >
              ◎
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>Itahari, Nepal | Melbourne, Australia</p>
          <p>All rights reserved © 2024 Nowa Technologies</p>
        </div>
      </footer>

      

    </div>
  );
};

export default Homepage;
