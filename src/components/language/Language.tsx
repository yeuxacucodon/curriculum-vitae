import styles from "./languages.module.scss";
import React from "react";
import { language } from "@/types";

const Language: React.FC<language> = ({ lang, percent }) => {
  return (
    <li className={styles.languages__name}>
      <span className={styles.language}>{lang}</span>
      <span className={styles.languages__percent}>
        <div style={{ width: percent }}></div>
      </span>
    </li>
  );
};

export default Language;
