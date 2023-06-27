import Image from "next/image";
import React from "react";
import styles from "./home.module.scss";

const Info: React.FC = () => {
  return (
    <section className={styles.home} id="home">
      <div className={[styles.home__container, "section", "bd-grid"].join(" ")}>
        <div className={[styles.home__data, "bd-grid"].join(" ")}>
          <Image
            src="/images/avt.png"
            width={500}
            height={500}
            priority={true}
            alt="avatar"
            className={styles.home__img}
          />
          <h1 className={styles.home__title}>Vo Quang Chien</h1>
          <h3 className={styles.home__profession}>Web Developer</h3>
        </div>
        <div className={[styles.home__address, "bd-grid"].join(" ")}>
          <span className={styles.home__information}>
            <i className="bx bxs-phone"></i>0852008975
          </span>
          <span className={styles.home__information}>
            <i className="bx bxs-envelope"></i>yeuxacucodon.dev@proton.me
          </span>
        </div>
      </div>
    </section>
  );
};

export default Info;
