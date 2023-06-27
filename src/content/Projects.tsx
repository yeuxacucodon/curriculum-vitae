import { Project } from "@/components";
import { project } from "@/types";

const data: project[] = [
  {
    title: "The Band landing page clone",
    preview: "https://thebandyeuxa.netlify.app/",
    repo: "https://github.com/yeuxacucodon/The_Band",
    used: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Fylo landing page",
    preview: "https://yeuxacucodon.github.io/Fylo_landing_page/",
    repo: "https://github.com/yeuxacucodon/Fylo_landing_page",
    used: ["HTML", "Sass"],
  },
];

const Projects: React.FC = () => {
  return (
    <section className="section" id="projects">
      <h3 className="section-title">Projects</h3>

      <div>
        {data.map((value, index) => (
          <Project key={index} title={value.title} preview={value.preview} repo={value.repo} used={value.used} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
