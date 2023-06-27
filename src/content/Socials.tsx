import { social } from "@/types";
import { Social } from "@/components";
import styles from "@/components/social/social.module.scss";

const data: social[] = [
  {
    title: "yeuxacucodon",
    link: "https://github.com/yeuxacucodon",
    icon: "bx bxl-github",
  },
  {
    title: "Vo Quang Chien",
    link: "https://facebook.com/langthangchokopai",
    icon: "bx bxl-facebook-circle",
  },
  {
    title: "2giosangmitom",
    link: "https://www.linkedin.com/in/2giosangmitom",
    icon: "bx bxl-linkedin-square",
  },
];

const Socials: React.FC = () => {
  return (
    <section className={[styles.social, "section"].join(" ")}>
      <h2 className="section-title">SOCIAL</h2>
      <div className={[styles.social__container, "bd-grid"].join(" ")}>
        {data.map((value, index) => {
          return <Social key={index} title={value.title} icon={value.icon} link={value.link} />;
        })}
      </div>
    </section>
  );
};

export default Socials;
