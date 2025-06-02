import React from "react";
import "./header.css";
import logo from "../../assets/nowa_logo_light_mode.png";

const navItems = [
  { label: "Home", href: "", active: true },
  { label: "Solutions", href: "solutions" },
  { label: "Ideas", href: "#ideas" },
  { label: "Career", href: "#career" },
];

const Header = () => {
  return (
    <header className="header light-header">
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
  );
};

export default Header;
