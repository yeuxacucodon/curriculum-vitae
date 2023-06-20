import styles from "@/assets/sass/education.module.scss";

interface education {
  title: string;
  studies: string;
  year: string;
}

function EducationContent(props: education) {
  return (
    <div className={styles.education__content}>
      <div className={styles.education__time}>
        <span className={styles.education__rounder}></span>
        <span className={styles.education__line}></span>
      </div>
      <div className={[styles.education__data, "bd-grid"].join(" ")}>
        <h3 className={styles.education__title}>{props.title}</h3>
        <span className={styles.education__studies}>{props.studies}</span>
        <span className={styles.education__year}>{props.year}</span>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section className="section" id="education">
      <h2 className="section-title">Education</h2>

      <div className={[styles.education__container, "bd-grid"].join(" ")}>
        <EducationContent
          title="JavaScript & TypeScript"
          studies="F8, W3Schools, freeCodeCamp"
          year="October, 2021 - April, 2022"
        />

        <EducationContent title="HTML & CSS" studies="F8, W3Schools" year="April, 2022 - September, 2022" />

        <EducationContent
          title="React, React Spring"
          studies="F8, W3Schools, freeCodeCamp"
          year="October, 2022 - April, 2023"
        />
      </div>
    </section>
  );
}
