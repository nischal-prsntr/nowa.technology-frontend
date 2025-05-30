import React, { useState } from "react";
import "./solutionPage.css";
import logo from "../../assets/nowa_typo_logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions", active: true },
  { label: "Ideas", href: "#ideas" },
  { label: "Career", href: "#career" },
];

const navMap = ["All", "AI", "Mobile", "Frontend", "Backend", "DevOps", "Process", "Database"];

const technologies = [
  { name: "Python", group: "Backend", logo: "/icons/python_logo.png" },
  { name: "OpenAI", group: "AI", logo: "/icons/openai_logo.png" },
  { name: "Bedrock", group: "AI", logo: "/icons/bedrock_logo.jpeg" },
  { name: "Atlassian", group: "Process", logo: "/icons/atlassian_logo.png" },
  { name: "Kotlin", group: "Mobile", logo: "/icons/kotlin_logo.png" },
  { name: "Hugging Face", group: "AI", logo: "/icons/huggingface_logo.svg" },
  { name: "Swift", group: "Mobile", logo: "/icons/swift_logo.png" },
  { name: "TypeScript", group: "Frontend", logo: "/icons/typescript_logo.png" },
  { name: "JavaScript", group: "Backend", logo: "/icons/javascript_logo.png" },
  { name: "Flutter", group: "Mobile", logo: "/icons/flutter_logo.png" },
  { name: "Java", group: "Backend", logo: "/icons/java_logo.png" },
  { name: "React", group: "Frontend", logo: "/icons/react_logo.png" },
  { name: "GraphQL", group: "Backend", logo: "/icons/graphql_logo.png" },
  { name: "PostgreSQL", group: "Backend", logo: "/icons/postgresql_logo.png" },
  { name: "Ruby on Rails", group: "Backend", logo: "/icons/ruby_logo.png" },
  
  { name: "Firebase", group: "Database", logo: "/icons/firebase_logo.png" },
  { name: "AWS", group: "DevOps", logo: "/icons/aws_logo.png" },
  { name: "MongoDB", group: "Database", logo: "/icons/mongo_logo.svg" },

  { name: "GitLab", group: "DevOps", logo: "/icons/gitlab_logo.png" },
];

const solutionsList = [
  {
    title: "AI & Machine Learning Development",
    description:
      "We develop custom AI and machine learning models tailored to your business needs — from predictive analytics and personalization engines to advanced computer vision and deep learning solutions that drive innovation.",
    image: "/images/ai_eng.jpg",
  },
  {
    title: "Data Engineering & Analytics",
    description:
      "Our experts build robust data architectures including pipelines, lakes, and warehouses, enabling secure, scalable, and real-time analytics. Turn fragmented data into powerful business intelligence dashboards.",
    image: "/images/data_eng.jpg",
  },
  {
    title: "Cloud Computing and DevOps",
    description:
      "We architect and manage scalable cloud infrastructure on AWS, Azure, or GCP. From CI/CD pipelines to Kubernetes orchestration, we ensure rapid, secure, and automated deployment for your applications.",
    image: "/images/dev_ops.jpeg",
  },
  {
    title: "App & Web Development",
    description:
      "We deliver modern, responsive applications for web and mobile platforms using best-in-class frontend and backend technologies. Our solutions are scalable, secure, and optimized for performance and user experience.",
    image: "/images/web_dev.png",
  },
  {
    title: "AI Chatbot & Virtual Assistant Development",
    description:
      "We build intelligent, conversational AI solutions powered by OpenAI, Claude, or fine-tuned LLMs — enabling businesses to automate support, enhance user engagement, and streamline internal operations.",
    image: "/images/ai_bot.jpg",
  },
  {
    title: "Natural Language Processing (NLP) Services",
    description:
      "From entity extraction to language translation and document classification, our NLP solutions enable machines to understand and process human language at scale — unlocking insights and automation.",
    image: "/images/nlp.jpg",
  },
  {
    title: "Generative AI Consulting",
    description:
      "We help you integrate cutting-edge generative AI tools for content creation, automation, design, and innovation workflows — whether through custom GPT models, diffusion tools, or domain-specific LLM tuning.",
    image: "/images/ai_consulting.jpg",
  },
];

const SolutionPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTechnologies =
    activeFilter === "All"
      ? technologies
      : technologies.filter((tech) => tech.group === activeFilter);

  return (
    <div className="solutionpage">
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

      <section className="solution-hero">
        <div className="solution-hero__content">
          <p className="solution-hero__tag">Solutions We Provide</p>
          <h1 className="solution-hero__headline">
            Building Intelligent Solutions for the Future
          </h1>
          <p className="solution-hero__subtext">
            From AI development to cloud infrastructure, we empower businesses
            with tailored technology solutions designed to scale, automate, and
            innovate across industries.
          </p>
        </div>
        <div className="solution-hero__bg"></div>
      </section>

      <section className="solution-sections">
        <div className="solution-sections__grid">
          {solutionsList.map((solution, index) => (
            <div className="solution-card" key={index}>
              <div className="solution-card__text">
                <h2 className="solution-card__title">{solution.title}</h2>
                <p className="solution-card__desc">{solution.description}</p>
              </div>
              <div className="solution-card__image">
                <img src={solution.image} alt={solution.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="technology-section">
        <h2>
          Our <span className="highlight">technology</span>
        </h2>

        <div className="tech-filters">
          {navMap.map((group) => (
            <button
              key={group}
              className={`tech-filter ${activeFilter === group ? "active" : ""}`}
              onClick={() => setActiveFilter(group)}
            >
              {group}
            </button>
          ))}
        </div>

        <div className="tech-grid">
          {filteredTechnologies.map((tech) => (
            <div className="tech-card" key={tech.name}>
              <img src={tech.logo} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SolutionPage;
