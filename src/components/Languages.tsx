import styles from "@/assets/sass/languages.module.scss";

export default function Languages() {
  return (
    <section className="section" id="languages">
      <h2 className="section-title">Languages</h2>

      <div>
        <ul>
          <li className={styles.languages__name}>
            <span className={styles.language}>Vietnamese</span>
            <span className={styles.languages__percent}>
              <div style={{ width: "90%" }}></div>
            </span>
          </li>
          <li className={styles.languages__name}>
            <span className={styles.language}>English</span>
            <span className={styles.languages__percent}>
              <div style={{ width: "60%" }}></div>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
