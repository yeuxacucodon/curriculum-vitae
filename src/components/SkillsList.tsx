import styles from "@/assets/sass/skills.module.scss";

export default function SkillsList({ list }: { list: string[] }) {
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
