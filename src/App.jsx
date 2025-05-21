import "./styles/App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationExperience from "./components/EducationExperience";
import ContactDetails from "./components/ContactDetails";
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [visibleSection, setVisibleSection] = useState("about");
  const sectionsRef = useRef([]);

  const refCallback = useCallback((element) => {
    if (element) {
      sectionsRef.current.push(element);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.getAttribute("id"));
        }
      });
    });

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <section>
      <Header visibleSection={visibleSection} />
      <main>
        <h1>Maryia Marozava</h1>
        <About refCallback={refCallback} />
        <Skills refCallback={refCallback} />
        <Projects refCallback={refCallback} />
        <EducationExperience refCallback={refCallback} />
        <ContactDetails refCallback={refCallback} />
      </main>
    </section>
  );
}

export default App;
