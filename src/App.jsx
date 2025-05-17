import "./styles/App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationExperience from "./components/EducationExperience";
import ContactDetails from "./components/ContactDetails";

function App() {
  return (
    <section>
      <Header />
      <main>
        <h1>Maryia Marozava</h1>
        <About />
        <Skills />
        <Projects />
        <EducationExperience />
        <ContactDetails />
      </main>
    </section>
  );
}

export default App;
