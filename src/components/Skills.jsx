import "../styles/Skills.css";

function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "HTML",
    "CSS",
    "React",
    "React Native",
    "Git",
    "Jest",
    "SQL",
  ];
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="skills-container">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
