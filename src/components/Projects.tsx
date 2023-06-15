import styles from "@/assets/sass/project.module.scss";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h3 className="section-title">Projects</h3>

      <div className="projects__container">
        <div className={styles.project__content}>
          <div>
            <span className={styles.project__rounder}></span>
            <span className={styles.project__line}></span>
          </div>
          <div className={[styles.project__data, "bd-grid"].join(" ")}>
            <h3 className={styles.project__title}>The Band landing page clone</h3>
            <p>
              Live preview:{" "}
              <a target="_blank" href="https://thebandyeuxa.netlify.app/">
                Click me!
              </a>
            </p>
            <p>
              GitHub repo:{" "}
              <a target="_blank" href="https://github.com/yeuxacucodon/The_Band">
                Click me!
              </a>
            </p>
            <p>Technologies used: HTML, CSS, JavaScript</p>
          </div>
        </div>

        <div className={styles.project__content}>
          <div>
            <span className={styles.project__rounder}></span>
            <span className={styles.project__line}></span>
          </div>
          <div className={[styles.project__data, "bd-grid"].join(" ")}>
            <h3 className={styles.project__title}>Fylo landing page</h3>
            <p>
              Live preview:{" "}
              <a href="https://yeuxacucodon.github.io/Fylo_landing_page/" target="_blank">
                Click me!
              </a>
            </p>
            <p>
              GitHub repo:{" "}
              <a target="_blank" href="https://github.com/yeuxacucodon/Fylo_landing_page">
                Click me!
              </a>
            </p>
            <p>Technologies used: HTML, Sass</p>
          </div>
        </div>
      </div>
    </section>
  );
}
