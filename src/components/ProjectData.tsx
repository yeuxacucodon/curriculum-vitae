import styles from "@/assets/sass/project.module.scss";

interface project {
  title: string;
  preview: string;
  repo: string;
  used: string[];
}

export default function ProjectData(props: project) {
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
