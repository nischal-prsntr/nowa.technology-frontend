import React, { useEffect } from "react";
import "./homepage.css";
import logo from "../../assets/nowa_typo_logo.png";
import symbol from "../../assets/globe.png";
import nowasymbol from "../../assets/nowa_symbol.png";
import ceo from "../../assets/ceo.jpg";
import Header from "../../components/Header/header";


const Homepage = () => {
  
  

  return (
    <div className="homepage">
      {/* Header */}
      <Header/>

      <section className="hero hero--light-bg">
        <div className="hero__main-text center-text">
          <h1 className="hero__headline animate-fade-in-up">
            LET'S CHANGE{" "}
            
            <br />
            THE WORLD TOGETHER
          </h1>
          <p className="hero__quote animate-fade-in-up delay-1">
            At Nowa, we believe in the transformative power of technology.
            Together, we can build systems that not only solve today’s problems
            but create a smarter, more connected future for everyone.
          </p>
        </div>

       
      </section>

      <section className="feature-overview-section">
  <div className="feature-overview-grid">
    <div className="feature-overview-text">
      <h2>Custom Tech, Global Impact</h2>
      <p>
      We build tailored systems that launch fast, scale globally, and solve real-world problems with lasting impact.
      </p>
    </div>
    <div className="feature-overview-image">
      <img src="/images/nowa_global_impact_section_img.png" alt="Illustration" />
    </div>
  </div>

  <div className="feature-overview-cards">
    <div className="feature-card green">
      <div className="icon">🌐</div>
      <h4>Solution Tailored to What Matters</h4>
      <p>We help visionary teams build technology that solves real-world challenges — fast. From idea to execution, Nowa delivers tailored, high-impact solutions powered by AI, automation, and bold thinking.</p>
    </div>
    <div className="feature-card blue">
      <div className="icon">💾</div>
      <h4>Engineering the Future</h4>
      <p>At Nowa, we don't just write code — we build what's next. Using the best of modern tech stacks, we create reliable, intelligent, and scalable solutions that drive long-term transformation.</p>
    </div>
    <div className="feature-card orange">
      <div className="icon">⚡</div>
      <h4>Everything Works Better Together</h4>
      <p>We bridge systems, people, and technologies so you can focus on building — not fixing. Our tech integrates effortlessly across tools and teams to deliver seamless innovation at scale.</p>
    </div>
    <div className="feature-card yellow">
      <div className="icon">🧠</div>
      <h4>Smarter Decisions. Faster Outcomes</h4>
      <p>Nowa's AI-powered research and automation tools help organizations cut through complexity — uncovering insights, generating content, and accelerating what's possible.</p>
    </div>
  </div>
</section>



<section className="scalable-solutions-section">
  <div className="scalable-content">
    <div className="scalable-image">
      <img src="/images/nowa_solution_section_img.png" alt="Solutions Illustration" />
    </div>
    <div className="scalable-text">
      <h3>Solutions That Scale With You</h3>
      <p>
        Whether you're validating an idea, modernizing a legacy platform, or scaling to meet global demand — Nowa delivers custom-built systems that evolve with your business.
      </p>
      <ul className="scalable-list">
        <li>Startup-ready rapid prototyping</li>
        <li>Enterprise system architecture</li>
        <li>AI & automation integration</li>
        <li>Mobile, web, and cloud-native builds</li>
        <li>Ongoing technical partnership</li>
      </ul>
      <button className="secure-cta">Let's Talk</button>
    </div>
  </div>

  <div className="trusted-by-section">
    <p className="trusted-title">Trusted by Teams At</p>
    <div className="logo-carousel">
      <img src="/logos/partner1.png" alt="Partner 1" />
      <img src="/logos/partner2.png" alt="Partner 2" />
      <img src="/logos/partner3.png" alt="Partner 3" />
      <img src="/logos/partner4.png" alt="Partner 4" />
      <img src="/logos/partner5.png" alt="Partner 5" />
      <img src="/logos/partner6.png" alt="Partner 6" />
    </div>
  </div>
</section>

<section className="tech-stack-section">
  <div className="tech-stack-container">
    <div className="tech-stack-text">
      <h2>Use the Tech You Love</h2>
      <p>
        Build with your favorite stack. No matter your toolset — we create fast, scalable containers and apps tailored to the platforms developers rely on daily.
      </p>
      <button className="tech-stack-btn">Learn More →</button>
    </div>

    <div className="tech-stack-grid">
      <div className="tech-icon"><img src="/icons/react_logo.png" alt="React" />React</div>
      <div className="tech-icon"><img src="/icons/node_logo.png" alt="Node.js" />Node.js</div>
      <div className="tech-icon"><img src="/icons/python_logo.png" alt="Python" />Python</div>
      <div className="tech-icon"><img src="/icons/openai_logo.png" alt="OpenAI" />OpenAI</div>
      <div className="tech-icon"><img src="/icons/firebase_logo.png" alt="Firebase" />Firebase</div>
      <div className="tech-icon"><img src="/icons/mongo_logo.svg" alt="MongoDB" />MongoDB</div>
      <div className="tech-icon"><img src="/icons/graphql_logo.png" alt="GraphQL" />GraphQL</div>
      <div className="tech-icon"><img src="/icons/javascript_logo.png" alt="JavaScript" />JavaScript</div>
      <div className="tech-icon"><img src="/icons/aws_logo.png" alt="AWS" />AWS</div>
    </div>
  </div>
</section>

<section className="cloud-cta-section">
  <div className="cloud-cta-container">
    <div className="cloud-cta-text">
      <h2>Big Idea? Small Idea? Bold Dream?</h2>
      <p>
      We’d love to hear it. Whether you're just starting with a sketch on a napkin or have a full-fledged concept ready to go, we're here to help bring your vision to life. Our team thrives on collaboration, innovation, and building things that matter. Let’s explore the possibilities together — and turn your ideas into something real, scalable, and impactful.
      </p>
      <button className="cloud-cta-button">Let’s Talk →</button>
    </div>
    <div className="cloud-cta-image">
      <img src="/images/nowa_idea_cta_img.png" alt="Flying Machines Illustration" />
    </div>
  </div>
</section>

<section className="ceo-message-section">
  <div className="ceo-message-content">
  <div className="ceo-text-block">
  <h3>Support by People Who Build the Tech</h3>
  <p>
    The people who are crazy enough to think they can change the world are the ones who do
  </p>
  <div className="ceo-name-title">
    <strong>Steve Jobs</strong>
    <span>Apple</span>
  </div>
</div>

    <div className="ceo-image-block">
      <img src={ceo} alt="CEO" />
    </div>
  </div>
</section>


    </div>
  );
};

export default Homepage;
