import ProjectData from "./ProjectData";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h3 className="section-title">Projects</h3>

      <div>
        <ProjectData
          title="The Band landing page clone"
          preview="https://thebandyeuxa.netlify.app/"
          repo="https://github.com/yeuxacucodon/The_Band"
          used={["HTML", "CSS", "JavaScript"]}
        />

        <ProjectData
          title="Fylo landing page"
          preview="https://yeuxacucodon.github.io/Fylo_landing_page/"
          repo="https://github.com/yeuxacucodon/Fylo_landing_page"
          used={["HTML", "Sass"]}
        />
      </div>
    </section>
  );
}
