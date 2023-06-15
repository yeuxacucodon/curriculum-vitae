import styles from "@/assets/sass/education.module.scss";

interface education {
  title: string;
  studies: string;
  year: string;
}

export default function EducationContent(props: education) {
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
