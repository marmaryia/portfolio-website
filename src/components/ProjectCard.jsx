function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.projectName}</h3>
      <img
        src={project.image}
        alt={project.projectName + " " + "screenshot"}
        className="project-img"
      />
      <p>{project.projectDescription}</p>
      <ul>
        {project.links.map((link, i) => {
          return (
            <li key={i}>
              <a href={link[Object.keys(link)]}>{Object.keys(link)}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectCard;
