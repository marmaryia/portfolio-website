import "../styles/Header.css";
import { useState, useEffect } from "react";

function Header({ visibleSection }) {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  function handleScroll() {
    let moving = window.pageYOffset;
    setVisible(position > moving);
    setPosition(moving);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className={`header-shadow ${visible ? "visible" : "hidden"} `}>
      <ul className="header-list" id="header">
        <li className={visibleSection === "about" ? "active" : ""}>
          <a href="#about">About</a>
        </li>
        <li className={visibleSection === "projects" ? "active" : ""}>
          <a href="#projects">Projects</a>
        </li>
        <li className={visibleSection === "skills" ? "active" : ""}>
          <a href="#skills">Skills</a>
        </li>
        <li
          className={visibleSection === "education-experience" ? "active" : ""}
        >
          <a href="#education-experience">Experience</a>
        </li>
        <li className={visibleSection === "contact-details" ? "active" : ""}>
          <a href="#contact-details">Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
