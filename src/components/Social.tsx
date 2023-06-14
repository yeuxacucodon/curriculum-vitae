import styles from "@/assets/sass/social.module.scss";

export default function Social() {
  return (
    <section className={[styles.social, "section"].join(" ")}>
      <h2 className="section-title">SOCIAL</h2>
      <div className={[styles.social__container, "bd-grid"].join(" ")}>
        <a target="_blank" href="https://github.com/yeuxacucodon" className={styles.social__link}>
          <i className="bx bxl-github"></i>yeuxacucodon
        </a>
        <a target="_blank" href="https://facebook.com/langthangchokopai" className={styles.social__link}>
          <i className="bx bxl-facebook-circle"></i>Vo Quang Chien
        </a>
      </div>
    </section>
  );
}
