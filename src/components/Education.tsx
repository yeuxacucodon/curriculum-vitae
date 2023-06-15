import styles from "@/assets/sass/education.module.scss";

export default function Education() {
  return (
    <section className="section" id="education">
      <h2 className="section-title">Education</h2>

      <div className={[styles.education__container, "bd-grid"].join(" ")}>
        <div className={styles.education__content}>
          <div className={styles.education__time}>
            <span className={styles.education__rounder}></span>
            <span className={styles.education__line}></span>
          </div>
          <div className={[styles.education__data, "bd-grid"].join(" ")}>
            <h3 className={styles.education__title}>JavaScript & TypeScript</h3>
            <span className={styles.education__studies}>F8, W3Schools, freeCodeCamp</span>
            <span className={styles.education__year}>October, 2021 - April, 2022</span>
          </div>
        </div>

        <div className={styles.education__content}>
          <div className={styles.education__time}>
            <span className={styles.education__rounder}></span>
            <span className={styles.education__line}></span>
          </div>
          <div className={[styles.education__data, "bd-grid"].join(" ")}>
            <h3 className={styles.education__title}>HTML & CSS</h3>
            <span className={styles.education__studies}>F8, W3Schools</span>
            <span className={styles.education__year}>April, 2022 - September, 2022</span>
          </div>
        </div>

        <div className={styles.education__content}>
          <div className={styles.education__time}>
            <span className={styles.education__rounder}></span>
            <span className={styles.education__line}></span>
          </div>
          <div className={[styles.education__data, "bd-grid"].join(" ")}>
            <h3 className={styles.education__title}>React, React Spring, React Router, Redux</h3>
            <span className={styles.education__studies}>F8, W3Schools, freeCodeCamp</span>
            <span className={styles.education__year}>October, 2022 - April, 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
}
