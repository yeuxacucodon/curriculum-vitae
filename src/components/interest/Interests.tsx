import styles from "./interests.module.scss";

const Interests: React.FC = () => {
  return (
    <section className="section">
      <h2 className="section-title">Interests</h2>

      <div className={[styles.interests__container, "bd-grid"].join(" ")}>
        <div className={styles.interests__content}>
          <i className="bx bx-code-alt"></i>
          <span>Code</span>
        </div>
        <div className={styles.interests__content}>
          <i className="bx bxs-movie-play"></i>
          <span>Movie</span>
        </div>
        <div className={styles.interests__content}>
          <i className="bx bx-headphone"></i>
          <span>Music</span>
        </div>
      </div>
    </section>
  );
};

export default Interests;
