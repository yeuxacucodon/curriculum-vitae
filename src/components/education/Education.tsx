import styles from "./education.module.scss";
import { education } from "@/types";
import React from "react";

const EducationContent: React.FC<education> = ({ title, studies, year }) => {
  return (
    <div className={styles.education__content}>
      <div className={styles.education__time}>
        <span className={styles.education__rounder}></span>
        <span className={styles.education__line}></span>
      </div>
      <div className={[styles.education__data, "bd-grid"].join(" ")}>
        <h3 className={styles.education__title}>{title}</h3>
        <span className={styles.education__studies}>{studies}</span>
        <span className={styles.education__year}>{year}</span>
      </div>
    </div>
  );
};

export default EducationContent;
