import "../styles/Header.css";

function Header({ visibleSection }) {
  return (
    <header className="header-shadow">
      <ul className="header-list">
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
