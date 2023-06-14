import styles from "@/assets/sass/experience.module.scss";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className={[styles.experience__container, "bd-grid"].join(" ")}>
        <div className={styles.experience__content}>
          <div className={styles.experience__time}>
            <span className={styles.experience__rounder}></span>
            <span className={styles.experience__line}></span>
          </div>

          <div className={[styles.experience__data, "bd-grid"].join(" ")}>
            <h3 className={styles.experience__title}>Front-End Developer</h3>
            <span className={styles.experience__company}>From 2021 | GitHub</span>
            <p>Where I save my open source projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
