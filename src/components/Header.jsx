import "../styles/Header.css";

function Header({ visibleSection }) {
  return (
    <header>
      <ul className="header-list">
        <li className={visibleSection === "about" ? "active" : ""}>
          <a href="#about">About me</a>
        </li>
        <li className={visibleSection === "skills" ? "active" : ""}>
          <a href="#skills">Skills</a>
        </li>
        <li className={visibleSection === "projects" ? "active" : ""}>
          <a href="#projects">Projects</a>
        </li>
        <li
          className={visibleSection === "education-experience" ? "active" : ""}
        >
          <a href="#education-experience">Education & Experience</a>
        </li>
        <li className={visibleSection === "contact-details" ? "active" : ""}>
          <a href="#contact-details">Contact details</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
