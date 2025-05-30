import ProjectCard from "./ProjectCard";
import "../styles/Projects.css";

function Projects({ refCallback }) {
  const projects = [
    {
      projectName: "Kinnected",
      projectDescription: `A mobile app that helps users stay in touch and  includes functionality to search for users by name, connect/disconnect with others and create/edit/delete placeholder profiles for non-users. Key features are visual indication of local time in different time zones, tracking of the period since last contact, and an in-built messenger.`,
      links: [
        {
          GitHub: "https://github.com/undivfined/kinnected_frontend",
        },
        { "Demo video": "https://www.youtube.com/watch?v=XfXqJcuv6q0" },
      ],
      image: "kinnected.png",
      techLogos: ["ts", "react", "express2"],
    },
    {
      projectName: "NC News",
      projectDescription: `A news website / discussion board web-app. The site displays a list of available articles, article pages and comments. It supports pagination, filtering/sorting, adding/removing comments, and voting on articles and comments. UX considerations include a responsive layout for different screen sizes, including mobile, and user-friendly success/failure messages.`,
      links: [
        {
          GitHub: "https://github.com/marmaryia/NC-News-frontend",
        },
        { "Try it": "https://maryia-nc-news.netlify.app/" },
      ],
      image: "nc-news.png",
      techLogos: ["js", "react", "express2"],
    },
    {
      projectName: "Hangman",
      projectDescription: `A positively-themed web-app which allows users to guess an automatically generated word or one chosen by a friend, with an on-screen keyboard dynamically showing correctly and incorrectly guessed letters and the word definition displayed at the end of the game.`,
      links: [
        {
          GitHub: "https://github.com/marmaryia/hangman-game",
        },
      ],
      image: "hangman.png",
      techLogos: ["ts", "react"],
    },
  ];

  return (
    <section id="projects" ref={refCallback} className="main-section">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
