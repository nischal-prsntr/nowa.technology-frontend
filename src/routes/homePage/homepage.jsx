import React, { useEffect } from "react";
import "./homepage.css";
import logo from "../../assets/nowa_typo_logo.png";
import symbol from "../../assets/globe.png";
import nowasymbol from "../../assets/nowa_symbol.png";
import ceo from "../../assets/ceo.jpg";
import Header from "../../components/Header/header";
import VantaBackground from "../../animation/VantaBackground";

const Homepage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section.reveal");

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
          section.classList.add("revealed");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="homepage">
      <Header />
      <section className="hero-section reveal">
        <VantaBackground />
        <div className="hero-content">
          <h1>
            Let’s Change The World <br />
            <span className="highlight">TOGETHER</span>
          </h1>
          <p>
            We are not just another tech company. We want to change the world,
            <br />
            but with you.
          </p>
        </div>
      </section>

      {/*Impact Section*/}
      <section className="impact-section reveal">
        <div className="impact-left">
          <h2>
            Custom Tech, <span className="highlight">Global Impact</span>
          </h2>
          <p>
            We build tailored systems that launch fast, scale globally,
            <br />
            and solve real-world problems with lasting impact.
          </p>
        </div>

        <div className="impact-right">
          <div className="impact-card">
            <img src="/icons/impact_1.png" alt="Rotate Icon" />
            <div>
              <h3>Solution Tailored to What Matters</h3>
              <p>
                We help visionary teams build technology that solves real–world
                challenges.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <img src="/icons/impact_2.png" alt="Rocket Icon" />
            <div>
              <h3>Everything Works Better Together</h3>
              <p>
                We help visionary teams build technology that solves real–world
                challenges.
              </p>
            </div>
          </div>

          <div className="impact-card">
            <img src="/icons/impact_4.png" alt="Building Icon" />
            <div>
              <h3>Engineering the Future</h3>
              <p>
                We help visionary teams build technology that solves real–world
                challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="idea-section reveal">
        <h2>
          Big Idea? Small Idea? <br />
          <span className="highlight-red">BOLD DREAM?</span>
        </h2>
        <p>
          We’d love to hear it. Whether you're just starting with a sketch on a
          napkin or have a full-fledged concept ready to go, we're here to help
          bring your vision to life.
        </p>
      </section>

      <section className="work-with-section reveal">
        <div className="work-with-left">
          <h2>
            We want to work <span className="highlight-red">WITH</span> You
          </h2>
          <p>
            Even if you are an established corporate, or an early startup,
            <br />
            have a vision? a goal? We want to bring it to life with you.
          </p>
        </div>

        <div className="work-with-right">
          <div className="startup-card">
            <img src="/icons/impact_4.png" alt="Startup Icon" />
            <div>
              <h3>Startup?</h3>
              <p>
                We help visionary teams build technology that solves real–world
                challenges. We help visionary teams.
              </p>
            </div>
          </div>

          <div className="corporate-card">
            <img src="/icons/impact_4.png" alt="Corporate Icon" />
            <div>
              <h3>Corporate?</h3>
              <p>
                We help visionary teams build technology that solves real–world
                challenges. We help visionary teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section reveal">
        <div className="contact-content">
          <div className="contact-left">
            <h2>
              Let’s bring that <span className="highlight">IDEA</span> to Life.
            </h2>
            <p>
              We build tailored systems that launch fast, scale globally, <br />
              and solve real-world problems with lasting impact.
            </p>

            <div className="location-list">
              <div className="location-item">
                <img src="/icons/location_icon.png" alt="Location" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="location-item">
                <img src="/icons/location_icon.png" alt="Location" />
                <span>Melbourne, Australia</span>
              </div>
              <div className="location-item">
                <img src="/icons/location_icon.png" alt="Location" />
                <span>Toronto, Canada</span>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <h3>Get In Touch</h3>
            <p>We will respond to you within 1 business day</p>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" rows={5} required />
              <button type="submit">I Am Ready To Bring My Idea To Life</button>
            </form>
          </div>
        </div>
      </section>

      <section className="marquee-section">
        <div className="marquee-container">
          <div className="marquee-content">
            LET'S CHANGE THE WORLD. TOGETHER!
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
