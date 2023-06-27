import { EducationContent } from "@/components";
import { education } from "@/types";

const data: education[] = [
  {
    title: "JavaScript & TypeScript",
    studies: "F8, W3Schools, freeCodeCamp",
    year: "October, 2021 - April, 2022",
  },
  {
    title: "HTML & CSS",
    studies: "F8, W3Schools",
    year: "April, 2022 - September, 2022",
  },
  {
    title: "React, React Spring",
    studies: "F8, W3Schools, freeCodeCamp",
    year: "October, 2022 - April, 2023",
  },
];

const Education: React.FC = () => {
  return (
    <section className="section" id="education">
      <h2 className="section-title">Education</h2>

      <div className="bd-grid">
        {data.map((item, index) => {
          return <EducationContent key={index} title={item.title} studies={item.studies} year={item.year} />;
        })}
      </div>
    </section>
  );
};

export default Education;
