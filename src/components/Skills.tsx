import styles from "@/assets/sass/skills.module.scss";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className={[styles.skills__content, "bd-grid"].join(" ")}>
        <ul>
          <li className={styles.skills__name}>
            <span className={styles.skills__circle}></span>HTML
          </li>
          <li className={styles.skills__name}>
            <span className={styles.skills__circle}></span>CSS, Sass
          </li>
          <li className={styles.skills__name}>
            <span className={styles.skills__circle}></span>Shell / Bash
          </li>
          <li className={styles.skills__name}>
            <span className={styles.skills__circle}></span>JavaScript
          </li>
          <li className={styles.skills__name}>
            <span className={styles.skills__circle}></span>TypeScript
          </li>
          <li className={styles.skills__name}>
            <span className={styles.skills__circle}></span>Rust
          </li>
        </ul>

        <ul>
          <li className={styles.skills__name}>
            <span className={styles.skills__circle}></span>React
          </li>
          <li className={styles.skills__name}>
            <span className={styles.skills__circle}></span>React Spring
          </li>
          <li className={styles.skills__name}>
            <span className={styles.skills__circle}></span>Redux
          </li>
          <li className={styles.skills__name}>
            <span className={styles.skills__circle}></span>Tailwind CSS
          </li>
          <li className={styles.skills__name}>
            <span className={styles.skills__circle}></span>Firebase
          </li>
          <li className={styles.skills__name}>
            <span className={styles.skills__circle}></span>Git
          </li>
        </ul>
      </div>
    </section>
  );
}
