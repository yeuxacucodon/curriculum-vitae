import { social } from "@/types";
import styles from "./social.module.scss";

const Social: React.FC<social> = ({ title, icon, link }: social) => {
  return (
    <a target="_blank" href={link} className={styles.social__link}>
      <i className={icon}></i>
      {title}
    </a>
  );
};

export default Social;
