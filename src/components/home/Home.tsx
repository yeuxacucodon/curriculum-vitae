import Image from "next/image";
import React from "react";
import styles from "./home.module.scss";
import { human } from "@/types";

const Info: React.FC<human> = ({ name, profession, phone, email, avt }) => {
  return (
    <section className={styles.home} id="home">
      <div className={[styles.home__container, "section", "bd-grid"].join(" ")}>
        <div className={[styles.home__data, "bd-grid"].join(" ")}>
          <Image src={avt} width={500} height={500} priority={true} alt="avatar" className={styles.home__img} />
          <h1 className={styles.home__title}>{name}</h1>
          <h3 className={styles.home__profession}>{profession}</h3>
        </div>
        <div className={[styles.home__address, "bd-grid"].join(" ")}>
          <span className={styles.home__information}>
            <i className="bx bxs-phone"></i>
            {phone}
          </span>
          <span className={styles.home__information}>
            <i className="bx bxs-envelope"></i>
            {email}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Info;
