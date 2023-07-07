import { Skills } from "@/components";
import styles from "@/components/skill/skills.module.scss";

const SkillContent: React.FC = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className={[styles.skills__content, "bd-grid"].join(" ")}>
        <Skills list={["HTML, CSS", "Shell", "JavaScript", "TypeScript", "Java", "Go"]} />
        <Skills list={["React", "Redux", "Tailwind CSS", "ExpressJS"]} />
        <Skills list={["PostgreSQL", "Docker", "Git"]} />
      </div>
    </section>
  );
};

export default SkillContent;
