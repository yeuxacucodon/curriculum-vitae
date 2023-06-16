"use client";

import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import styles from "@/assets/sass/nav.module.scss";

export default function Nav() {
  const [show, setShow] = useState(false);
  const transition = useTransition(show, {
    from: { y: 500 },
    enter: { y: 0 },
    leave: { y: 500 },
  });

  return (
    <header className={styles.l_header} id="header">
      <nav className={[styles.nav, "bd-container"].join(" ")}>
        <a href="#" className={styles.nav__logo}>
          Vo Quang Chien
        </a>

        {transition((style, item) => {
          return item ? (
            <animated.div className={styles.nav__menu} style={style}>
              <ul className={styles.nav__list}>
                <li className={styles.nav__item} onClick={() => setShow(false)}>
                  <a href="#home" className={styles.nav__link}>
                    <i className="bx bxs-home"></i>Home
                  </a>
                </li>

                <li className={styles.nav__item} onClick={() => setShow(false)}>
                  <a href="#profile" className={styles.nav__link}>
                    <i className="bx bxs-user"></i>Profile
                  </a>
                </li>

                <li className={styles.nav__item} onClick={() => setShow(false)}>
                  <a href="#education" className={styles.nav__link}>
                    <i className="bx bxs-book"></i>Education
                  </a>
                </li>

                <li className={styles.nav__item} onClick={() => setShow(false)}>
                  <a href="#skills" className={styles.nav__link}>
                    <i className="bx bxs-receipt"></i>Skills
                  </a>
                </li>

                <li className={styles.nav__item} onClick={() => setShow(false)}>
                  <a href="#projects" className={styles.nav__link}>
                    <i className="bx bxs-briefcase"></i>Projects
                  </a>
                </li>

                <li className={styles.nav__item} onClick={() => setShow(false)}>
                  <a href="#languages" className={styles.nav__link}>
                    <i className="bx bx-link-external"></i>Languages
                  </a>
                </li>
              </ul>
            </animated.div>
          ) : null;
        })}

        <div className={styles.nav__toggle} onClick={() => setShow(!show)}>
          <i className="bx bxs-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
}
