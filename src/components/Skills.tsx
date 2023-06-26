import styles from "@/assets/sass/skills.module.scss";
import React from "react";

const SkillsList: React.FC<{ list: string[] }> = ({ list }: { list: string[] }) => {
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

const Skills: React.FC = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className={[styles.skills__content, "bd-grid"].join(" ")}>
        <SkillsList list={["HTML, CSS", "Shell", "JavaScript", "TypeScript", "Rust", "Java"]} />
        <SkillsList list={["Redux / Zustand", "React", "React Spring", "Tailwind CSS", "Sass", "Express"]} />
        <SkillsList list={["Docker", "Git"]} />
      </div>
    </section>
  );
};

export default Skills;
