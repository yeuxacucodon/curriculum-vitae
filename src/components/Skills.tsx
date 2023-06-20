import styles from "@/assets/sass/skills.module.scss";

function SkillsList({ list }: { list: string[] }) {
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
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className={[styles.skills__content, "bd-grid"].join(" ")}>
        <SkillsList list={["HTML, CSS", "Shell / Bash", "JavaScript", "TypeScript", "Rust", "Java"]} />
        <SkillsList list={["React", "React Spring", "Redux / Zustand", "Tailwind CSS", "Sass", "Git"]} />
      </div>
    </section>
  );
}
