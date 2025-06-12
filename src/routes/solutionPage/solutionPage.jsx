import React, { useState, useEffect } from "react";
import "./solutionPage.css";
import Header from "../../components/Header/header";
import VantaBackground from "../../animation/VantaBackground";
import VantaDotBackground from "../../animation/VantaDotBackground";
import VantaNetBackground from "../../animation/VantaNetBackground";
import NotificationCard from "../../components/NotificationCard/notificationCard";

const solutions = [
  {
    title: "AI-Powered Knowledge Assistant",
    description: "We built a scalable internal AI assistant that understands company-specific data and answers queries with speed and accuracy — revolutionizing how teams access information.",
    bgImage: "/images/solutions/ai-assistant.jpg",
    tags: ["AI", "Knowledge Base", "Automation"]
  },
  {
    title: "Realtime Collaboration Platform",
    description: "We engineered a platform enabling distributed teams to collaborate in real-time with smart versioning, task tracking, and integrated AI recommendations.",
    bgImage: "/images/solutions/collab-platform.jpg",
    tags: ["Productivity", "SaaS", "Realtime"]
  },
  {
    title: "Smart Presentation Coach",
    description: "We created an AI coach that helps users practice and improve presentations with instant feedback on pace, clarity, tone, and filler words — turning nervous speakers into confident presenters.",
    bgImage: "/images/solutions/presentation-ai.jpg",
    tags: ["AI", "Speech", "Feedback"]
  },
  {
    title: "Student Companion App",
    description: "An all-in-one mobile app that supports international students with mentorship, offers, legal guidance, and wellbeing resources — all powered by a voice-first AI experience.",
    bgImage: "/images/solutions/student-app.jpg",
    tags: ["Mobile App", "Student Support", "Voice AI"]
  },
  {
    title: "Custom RAG Model for Finance",
    description: "We deployed a Retrieval-Augmented Generation system to help a financial firm extract answers from regulatory documents with full source traceability.",
    bgImage: "/images/solutions/rag-finance.jpg",
    tags: ["LLM", "RAG", "Finance"]
  },
  {
    title: "Data-Driven Career Platform",
    description: "From resume parsing to interview feedback — we crafted a platform that helps early professionals land jobs by matching their strengths with market needs.",
    bgImage: "/images/solutions/career-platform.jpg",
    tags: ["Jobs", "Matching", "ML"]
  }
];


const SolutionPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section.reveal");
    sections.forEach((section) => section.classList.add("revealed"));
  }, []);



  return (
    <div className="solutionPage">
      <NotificationCard />
      <Header />

      <section className="solution-hero-section reveal">
  <VantaNetBackground />
  <div className="solution-hero-content">
    <h1>
      Transformative Solutions <br />
      <span className="highlight">Built for Impact</span>
    </h1>
    <p>
      We engineer technology that solves real problems and creates lasting change.
    </p>
  </div>
</section>

<section className="solution-approach-section reveal">
  <div className="approach-container">
    <div className="approach-left">
      <h2>
        From <span className="highlight">Idea</span> to <br />
        Real-World Product
      </h2>
      <p>
        Every idea starts as a spark — our job is to shape it. We translate raw vision 
        into impactful digital products through thoughtful collaboration, strategic thinking, 
        and technical craftsmanship.
      </p>
    </div>
    <div className="approach-right">
      <div className="approach-steps">
        <div className="approach-step">
          <span className="step-number">01</span>
          <div>
            <h3>Understanding the Idea</h3>
            <p>We listen deeply to uncover the core vision, goals, and problem your idea aims to solve.</p>
          </div>
        </div>
        <div className="approach-step">
          <span className="step-number">02</span>
          <div>
            <h3>Shaping the Vision</h3>
            <p>We co-create a roadmap — defining user flows, technical direction, and measurable outcomes.</p>
          </div>
        </div>
        <div className="approach-step">
          <span className="step-number">03</span>
          <div>
            <h3>Prototyping Possibilities</h3>
            <p>We bring the idea to life with interactive prototypes that validate and evolve with feedback.</p>
          </div>
        </div>
        <div className="approach-step">
          <span className="step-number">04</span>
          <div>
            <h3>Building the Product</h3>
            <p>We develop and launch robust, scalable solutions — ready for real-world impact and growth.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="problems-section reveal">
  <div className="problems-container">
    <div className="problems-header">
      <h2>
        The <span className="highlight">Challenges</span> We Tackle
      </h2>
      <p>
        Every idea begins with a problem worth solving. We help you navigate complexity, 
        clarify your vision, and turn obstacles into opportunities.
      </p>
    </div>

    <div className="problems-grid">
      <div className="problem-card">
        <div className="problem-icon">
          <img src="/icons/data-chaos-icon.png" alt="Information Overload" />
        </div>
        <h3>Economic efficiency is achievable by choosing the optimal cooperation model</h3>
        <p>
          Struggling to extract insights from unstructured data? We help organize chaos into clarity with smart AI systems.
        </p>
      </div>

      <div className="problem-card">
        <div className="problem-icon">
          <img src="/icons/collaboration-icon.png" alt="Team Friction" />
        </div>
        <h3>Disconnected Teams</h3>
        <p>
          Remote teams often face silos and inefficiencies. We build systems that unify collaboration and knowledge sharing.
        </p>
      </div>

      <div className="problem-card">
        <div className="problem-icon">
          <img src="/icons/legacy-icon.png" alt="Legacy Tech" />
        </div>
        <h3>Outdated Tech Infrastructure</h3>
        <p>
          Legacy systems slow innovation. We modernize your stack to support speed, flexibility, and future growth.
        </p>
      </div>

      <div className="problem-card">
        <div className="problem-icon">
          <img src="/icons/engagement-icon.png" alt="Digital Gaps" />
        </div>
        <h3>Poor User Experience</h3>
        <p>
          Frustrating digital experiences cost trust. We design interfaces that feel intuitive, personal, and intelligent.
        </p>
      </div>

      <div className="problem-card">
        <div className="problem-icon">
          <img src="/icons/innovation-icon.png" alt="Innovation Blocked" />
        </div>
        <h3>Ideas Without Execution</h3>
        <p>
          Many bold ideas get stuck in slides. We turn those ideas into working prototypes and products — fast.
        </p>
      </div>

      <div className="problem-card">
        <div className="problem-icon">
          <img src="/icons/security-icon.png" alt="AI Trust Issues" />
        </div>
        <h3>Lack of Trust in AI</h3>
        <p>
          AI systems need transparency and ethics. We build explainable, secure AI you can trust — and prove.
        </p>
      </div>
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

export default SolutionPage;
