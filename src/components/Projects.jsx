import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      projectName: "NC News",
      projectDescription: `A news website / discussion board web-app. The site displays a list of available articles, article pages and comments. It supports pagination, filtering/sorting, adding/removing comments, and voting on articles and comments. UX considerations include a responsive layout for different screen sizes, including mobile, and user-friendly success/failure messages.`,
      links: [
        { "Backend on GitHub": "https://github.com/marmaryia/NC-News-backend" },
        {
          "Frontend on GitHub": "https://github.com/marmaryia/NC-News-frontend",
        },
        { "Deployed version": "https://maryia-nc-news.netlify.app/" },
      ],
      image: "nc-news.png",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </section>
  );
}

export default Projects;
