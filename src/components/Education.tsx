import styles from "@/assets/sass/education.module.scss";
import EducationContent from "./EducationContent";

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
