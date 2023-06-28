import styles from "./skills.module.scss";
import React from "react";

const Skills: React.FC<{ list: string[] }> = ({ list }) => {
  return (
    <ul>
      {list.map((skill, index) => {
        return (
          <li key={index} className={styles.skills__name}>
            <span className={styles.skills__circle}></span>
            {skill}
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
