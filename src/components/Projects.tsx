import styles from "@/assets/sass/project.module.scss";

interface project {
  title: string;
  preview: string;
  repo: string;
  used: string[];
}

function ProjectData(props: project) {
  return (
    <div className={styles.project__content}>
      <div>
        <span className={styles.project__rounder}></span>
        <span className={styles.project__line}></span>
      </div>
      <div className={[styles.project__data, "bd-grid"].join(" ")}>
        <h3 className={styles.project__title}>{props.title}</h3>
        <p>
          Live preview:{" "}
          <a target="_blank" href={props.preview}>
            Click me!
          </a>
        </p>
        <p>
          GitHub repo:{" "}
          <a target="_blank" href={props.repo}>
            Click me!
          </a>
        </p>
        <p>Technologies used: {props.used.join(", ")}</p>
      </div>
    </div>
  );
}

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
