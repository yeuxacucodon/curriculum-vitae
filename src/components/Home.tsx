import Image from "next/image";
import avt from "@/assets/images/avt.png";
import styles from "@/assets/sass/home.module.scss";

export default function Info() {
  return (
    <section className={styles.home} id="home">
      <div className={[styles.home__container, "section", "bd-grid"].join(" ")}>
        <div className={[styles.home__data, "bd-grid"].join(" ")}>
          <Image src={avt} priority={true} alt="avatar" className={styles.home__img} />
          <h1 className={styles.home__title}>Vo Quang Chien</h1>
          <h3 className={styles.home__profession}>Front-End Developer</h3>
        </div>
        <div className={[styles.home__address, "bd-grid"].join(" ")}>
          <span className={styles.home__information}>
            <i className="bx bxs-map"></i>Hue, Viet Nam
          </span>
          <span className={styles.home__information}>
            <i className="bx bxs-envelope"></i>yeuxacucodon.dev@proton.me
          </span>
          <span className={styles.home__information}>
            <i className="bx bxs-phone"></i>0852008975
          </span>
        </div>
      </div>
    </section>
  );
}
