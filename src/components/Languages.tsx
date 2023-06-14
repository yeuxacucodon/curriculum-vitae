import styles from "@/assets/sass/languages.module.scss";

export default function Languages() {
  return (
    <section className="section" id="languages">
      <h2 className="section-title">Languages</h2>

      <div>
        <ul className={[styles.languages__content, "bd-grid"].join(" ")}>
          <li className={styles.languages__name}>
            <span className={styles.languages__circle}></span> Vietnamese
          </li>
          <li className={styles.languages__name}>
            <span className={styles.languages__circle}></span> English
          </li>
        </ul>
      </div>
    </section>
  );
}
