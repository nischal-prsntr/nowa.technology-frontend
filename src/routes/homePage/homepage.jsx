import React, { useState, useEffect } from "react";
import "./homepage.css";
import logo from "../../assets/nowa_typo_logo.png";
import symbol from "../../assets/globe.png";
import nowasymbol from "../../assets/nowa_symbol.png";
import ceo from "../../assets/ceo.jpg";
import Header from "../../components/Header/header";
import VantaBackground from "../../animation/VantaBackground";
import VantaDotBackground from "../../animation/VantaDotBackground";
import VantaNetBackground from "../../animation/VantaNetBackground";

const partnerTypes = [
  {
    id: "nonprofit",
    title: "Non-for-Profit?",
    icon: "/icons/nonprofit_icon.png",
    bg: "/backgrounds/non_for_profit_bg.jpg",
    description:
      "Driven by impact. We amplify missions through purposeful tech that empowers and endures.",
  },
  {
    id: "startup",
    title: "Startup?",
    icon: "/icons/startup_icon.png",
    bg: "/backgrounds/startup_bg.jpg",
    description:
      "We help visionary teams build technology that solves real-world challenges. We’re your co-founders in spirit.",
  },
  {
    id: "corporate",
    title: "Corporate?",
    icon: "/icons/corporate_icon.png",
    bg: "/backgrounds/corporate_bg.jpg",
    description:
      "You bring the purpose. We bring the execution. Together, we solve complex challenges with creativity and clarity.",
  },
];

const clients = [
  {
    name: "Porsche",
    logo: "/logos/partner1.png",
    bg: "/backgrounds/partner1_bg.jpg",
    description: "Luxury automotive innovation",
  },
  {
    name: "Porsche",
    logo: "/logos/partner2.png",
    bg: "/backgrounds/partner2_bg.jpg",
    description: "Luxury automotive innovation",
  },
  {
    name: "Porsche",
    logo: "/logos/partner3.png",
    bg: "/backgrounds/partner3_bg.jpg",
    description: "Luxury automotive innovation",
  },
  {
    name: "Porsche",
    logo: "/logos/partner4.png",
    bg: "/backgrounds/partner4_bg.jpg",
    description: "Luxury automotive innovation",
  },
  {
    name: "Porsche",
    logo: "/logos/partner5.png",
    bg: "/backgrounds/partner5_bg.jpg",
    description: "Luxury automotive innovation",
  },
];

const Homepage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection("prev");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? partnerTypes.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300); // matches CSS duration
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection("next");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === partnerTypes.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 300); // matches CSS duration
  };

  const currentCard = partnerTypes[activeIndex];

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
            We’re here to transform ideas into impact. Let’s build something
            meaningful.
          </p>
        </div>
      </section>
      {/*Impact Section*/}
      <section className="impact-idea-section reveal">
        <VantaDotBackground />
        <section className="impact-section">
          <div className="impact-left">
            <h2>
              From Vision to Reality, <br />
              <span className="highlight">With Impact</span>
            </h2>
            <p>
              We help turn ambitious ideas into real-world change,
              <br />
              through thoughtful design, scalable systems, and lasting
              collaboration.
            </p>
          </div>

          <div className="impact-right">
            <div className="impact-card">
              <img src="/icons/impact_1.png" alt="Rotate Icon" />
              <div>
                <h3>Solution Tailored to What Matters</h3>
                <p>
                  We shape solutions around bold ideas, not the other way
                  around.
                </p>
              </div>
            </div>

            <div className="impact-card">
              <img src="/icons/impact_2.png" alt="Rocket Icon" />
              <div>
                <h3>Everything Works Better Together</h3>
                <p>
                  Collaboration is where innovation begins. We co-create, not
                  dictate.
                </p>
              </div>
            </div>

            <div className="impact-card">
              <img src="/icons/impact_4.png" alt="Building Icon" />
              <div>
                <h3>Engineering the Future</h3>
                <p>
                  We don’t just code. We construct the future, one idea at a
                  time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="idea-section">
          <h2>
            Big Idea? Small Idea? <br />
            <span className="highlight-red">BOLD DREAM?</span>
          </h2>
          <p>
            We’d love to hear it. Whether it's a passing thought or a polished
            pitch, we’re here to explore it with you — and shape it into
            something that matters.
          </p>
        </section>
      </section>

      <section className="partner-type-section reveal">
        <div className="partner-left">
          <h2>
            We want to work <br />{" "}
            <span className="highlight-red">WITH YOU</span>
          </h2>
          <p>
            Whether you're an ambitious startup, a mission-driven nonprofit, or
            a global enterprise, if you have a mission, we'll build it with you.
          </p>
        </div>

        <div className="partner-right">
          <div
            className={`partner-card swipe-${direction} ${
              isAnimating ? "swiping" : ""
            }`}
            style={{ backgroundImage: `url(${currentCard.bg})` }}
          >
            <div className="partner-info-card">
              <img src={currentCard.icon} alt={currentCard.id} />
              <div>
                <h3>{currentCard.title}</h3>
                <p>{currentCard.description}</p>
              </div>
            </div>
          </div>

          <div className="partner-nav-bottom">
            <button className="partner-arrow">
              <span onClick={handlePrev}>&lt;</span>
            </button>
            <button className="partner-arrow">
              <span onClick={handleNext}>&gt;</span>
            </button>
          </div>
        </div>
      </section>

      <section className="clients-section reveal">
        <div className="clients-container">
          <h2>
            Big Thinkers. <span className="highlight">Brave Builders.</span>
            <br /> Our partners in changing the world.
          </h2>

          <div className="clients-carousel">
            <div className="clients-track">
              {clients.map((client, idx) => (
                <div className="client-card" key={idx}>
                  <div
                    className="client-bg"
                    style={{ backgroundImage: `url(${client.bg})` }}
                  />
                  <div className="client-content">
                    <img
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      className="client-logo"
                    />
                    <div className="client-info">
                      <h3>{client.name}</h3>
                      <p>{client.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*
      <section className="work-with-section reveal">
        <div className="work-with-left">
          <h2>
            We want to work <span className="highlight-red">WITH</span> You
          </h2>
          <p>
            Whether you're just getting started or shaping global strategies{" "}
            <br />
            if you have a mission, we’ll build with you.
          </p>
        </div>

        <div className="work-with-right">
          <div className="startup-card">
            <img src="/icons/impact_4.png" alt="Startup Icon" />
            <div>
              <h3>Startup?</h3>
              <p>
                We’re your co-founders in spirit — here to bring the spark in
                your mind to life.
              </p>
            </div>
          </div>

          <div className="corporate-card">
            <img src="/icons/impact_4.png" alt="Corporate Icon" />
            <div>
              <h3>Corporate?</h3>
              <p>
                You bring the purpose. We bring the execution. Together, we
                solve complex challenges with creativity and clarity.
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

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

export default Homepage;
