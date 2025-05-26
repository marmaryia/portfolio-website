import "../styles/Skills.css";

function Skills({ refCallback }) {
  const skills = [
    ["JavaScript", "js"],
    ["TypeScript", "ts"],
    ["Node.js", "nodejs2"],
    ["Express.js", "express2"],
    ["HTML", "html"],
    ["CSS", "css"],
    ["React", "react"],
    ["Git", "git"],
    ["Jest", "jest"],
    ["PostgreSQL", "postgres"],
  ];
  return (
    <section id="skills" ref={refCallback} className="main-section">
      <h1>Skills</h1>
      <ul className="skills-container">
        {skills.map((skill, i) => (
          <li key={i}>
            <div className="skill-card box-shadow">
              <img
                src={`icons/${skill[1]}.svg`}
                width="70px"
                height="70px"
              ></img>
              <p>{skill[0]}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
