import React, { useState, useEffect } from "react";
import "./visionPage.css";
import Header from "../../components/Header/header";
import VantaBackground from "../../animation/VantaBackground";
import VantaDotBackground from "../../animation/VantaDotBackground";
import VantaNetBackground from "../../animation/VantaNetBackground";
import NotificationCard from "../../components/NotificationCard/notificationCard";

const VisionPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section.reveal");
    sections.forEach((section) => section.classList.add("revealed"));
  }, []);

  const values = [
    {
      wordFragment: "Courage",
      oppositeComplement: "Community",
    },
    {
      wordFragment: "Innovate",
      oppositeComplement: "Iterate",
    },
    {
      wordFragment: "Global",
      oppositeComplement: "Local",
    },
    {
      wordFragment: "Build",
      oppositeComplement: "Bridge",
    },
    {
      wordFragment: "Dream",
      oppositeComplement: "Do",
    },
    {
      wordFragment: "Teach",
      oppositeComplement: "Learn",
    },
  ];

  return (
    <div className="visionPage">
      <NotificationCard />
      <Header />

      <section className="vision-hero-section reveal">
        <VantaNetBackground />
        <div className="vision-hero-content">
          <h1>
            A Vision <br />
            <span className="highlight">With Purpose</span>
          </h1>
          <p>
            We’re here to bridge worlds — connecting dreams with talent, and
            talent with opportunity.
            <br />
            Because every idea deserves a chance, and every individual, a path
            to grow.
          </p>
        </div>
      </section>
      <section className="vision-pillars-section reveal">
        <div className="vision-pillars-header">
          <h2>
            Why we do what we do at <span className="highlight-red">Nowa</span>
          </h2>
          <p>These aren’t just beliefs — they’re our purpose.</p>
        </div>

        <div className="vision-pillars-content-row">
          {/* Left: List */}
          <div className="vision-pillars-list">
            <div className="vision-item">
              <img src="/icons/growth_icon.png" alt="Growth" />
              <div className="vision-text">
                <h3>Empowering People to Build</h3>
                <p>
                  We exist to help individuals unlock their potential — whether
                  it’s building their first product or scaling their fifth.
                  Every step matters.
                </p>
              </div>
            </div>

            <div className="vision-item">
              <img src="/icons/opportunity_icon.png" alt="Opportunity" />
              <div className="vision-text">
                <h3>Bridging Global Gaps</h3>
                <p>
                  We connect talent from underserved regions like Nepal with
                  opportunities across the world — turning local skill into
                  global impact.
                </p>
              </div>
            </div>

            <div className="vision-item">
              <img src="/icons/impact_icon.png" alt="Impact" />
              <div className="vision-text">
                <h3>Impact That Scales</h3>
                <p>
                  Changing the world doesn’t always mean scale. If one idea
                  improves one life — we’ll help build it. That’s real
                  innovation to us.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="vision-pillars-image">
            <img src="/backgrounds/this_is_it.jpg" alt="Vision" />
          </div>
        </div>
      </section>
      <section className="contact-section reveal">
        <div className="contact-content">
          <div className="contact-left">
            <h2>
              Let’s Turn That <span className="highlight">Possibility </span>{" "}
              into Progress.
            </h2>
            <p>
              Every problem is an opportunity. Every idea, a spark.
              <br /> Let’s create something that leaves a mark.
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

export default VisionPage;
