function ProjectCard({ project }) {
  return (
    <div className="project-card box-shadow">
      <h3>{project.projectName}</h3>
      <div className="project-card-img-section">
        <img
          src={project.image}
          alt={project.projectName + " " + "screenshot"}
          className="project-img"
        />
        {project.techLogos.map((logo, i) => {
          return (
            <img
              key={i}
              src={`icons/${logo}.svg`}
              className="project-tech-icon"
            />
          );
        })}
      </div>
      <p>{project.projectDescription}</p>
      <ul>
        {project.links.map((link, i) => {
          return (
            <li key={i} className="project-link">
              <a href={link[Object.keys(link)]}>{Object.keys(link)}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectCard;
