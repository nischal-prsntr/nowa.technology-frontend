import React from "react";
import "./header.css";
import logo from "../../assets/Nowa_full_logo_dark_mode.png";

const navItems = [
  { label: "Home", href: "", active: true },
  { label: "Vision", href: "#vision" },
  { label: "Solutions", href: "#solutions" },
  { label: "Career", href: "#career" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Nowa Logo" width="120" height="40" />
      </div>

      <div className="header__right">
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

        <a href="#contact" className="header__cta pulse-on-hover">
          Let’s Talk
        </a>
      </div>
    </header>
  );
};

export default Header;
