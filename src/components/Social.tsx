import styles from "@/assets/sass/social.module.scss";

const Social: React.FC = () => {
  return (
    <section className={[styles.social, "section"].join(" ")}>
      <h2 className="section-title">SOCIAL</h2>
      <div className={[styles.social__container, "bd-grid"].join(" ")}>
        <a target="_blank" href="https://github.com/yeuxacucodon" className={styles.social__link}>
          <i className="bx bxl-github"></i>yeuxacucodon
        </a>
        <a target="_blank" href="https://facebook.com/langthangchokopai" className={styles.social__link}>
          <i className="bx bxl-facebook-circle"></i>langthangchokopai
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/2giosangmitom" className={styles.social__link}>
          <i className="bx bxl-linkedin-square"></i>2giosangmitom
        </a>
      </div>
    </section>
  );
};

export default Social;
