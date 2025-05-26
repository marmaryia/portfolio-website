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
    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(() => entry.target.getAttribute("id"));
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="main-container">
      <Header visibleSection={visibleSection} />
      <About refCallback={refCallback} />
      <Projects refCallback={refCallback} />
      <Skills refCallback={refCallback} />
      <EducationExperience refCallback={refCallback} />
      <ContactDetails refCallback={refCallback} />
    </main>
  );
}

export default App;
