import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      projectName: "kinnected",
      projectDescription: `A mobile app helps users stay in touch and  includes functionality to search for users by name, connect/disconnect with others and create/edit/delete placeholder profiles for non-users. Key features are visual indication of local time in different time zones, tracking of the period since last contact, and an in-built messenger.`,
      links: [
        {
          "Backend on GitHub": "https://github.com/undivfined/kinnected_server",
        },
        {
          "Frontend on GitHub":
            "https://github.com/undivfined/kinnected_frontend",
        },
        { "Demo video": "https://www.youtube.com/watch?v=XfXqJcuv6q0" },
      ],
      image: "kinnected.png",
    },
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
    {
      projectName: "Hangman",
      projectDescription: `A positively-themed web-app which allows users to guess an automatically generated word or one chosen by a friend, with an on-screen keyboard dynamically showing correctly/incorrectly guessed letters and the word definition displayed at the end of the game.`,
      links: [
        {
          "Project on GitHub": "https://github.com/marmaryia/hangman-game",
        },
      ],
      image: "hangman.png",
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
