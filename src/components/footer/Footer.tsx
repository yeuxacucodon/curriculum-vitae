import styles from "./footer.module.scss";
import React from "react";

const Footer: React.FC = () => {
  return (
    <section className={styles.footer}>
      <p>
        Made with <i className="bx bxs-heart"></i> by yeuxacucodon
      </p>
    </section>
  );
};

export default Footer;
