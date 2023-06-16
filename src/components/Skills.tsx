import styles from "@/assets/sass/skills.module.scss";
import SkillsList from "./SkillsList";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className={[styles.skills__content, "bd-grid"].join(" ")}>
        <SkillsList list={["HTML", "CSS, Sass", "Shell / Bash", "JavaScript", "TypeScript", "Rust", "Java"]} />
        <SkillsList list={["React", "React Spring", "Redux / Zustand", "Tailwind CSS", "Firebase", "Git"]} />
      </div>
    </section>
  );
}
