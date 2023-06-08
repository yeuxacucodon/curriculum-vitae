import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";

export default function Header() {
  const [show, setShow] = useState(false);
  const transition = useTransition(show, {
    from: { y: 50, opacity: 0 },
    enter: { y: 0, x: 0, opacity: 1 },
    leave: { y: 500 },
  });

  return (
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#" className="nav__logo">
          Vo Quang Chien
        </a>

        {transition((style, item) => {
          return item ? (
            <animated.div className="nav__menu" id="nav-menu" style={style}>
              <ul className="nav__list">
                <li className="nav__item" onClick={() => setShow(false)}>
                  <a href="#home" className="nav__link">
                    <i className="bx bx-home"></i>Home
                  </a>
                </li>

                <li className="nav__item" onClick={() => setShow(false)}>
                  <a href="#profile" className="nav__link">
                    <i className="bx bx-user"></i>Profile
                  </a>
                </li>

                <li className="nav__item" onClick={() => setShow(false)}>
                  <a href="#" className="nav__link">
                    <i className="bx bxs-book"></i>Education
                  </a>
                </li>

                <li className="nav__item" onClick={() => setShow(false)}>
                  <a href="#" className="nav__link">
                    <i className="bx bxs-receipt"></i>Skills
                  </a>
                </li>

                <li className="nav__item" onClick={() => setShow(false)}>
                  <a href="#" className="nav__link">
                    <i className="bx bxs-briefcase"></i>Experience
                  </a>
                </li>

                <li className="nav__item" onClick={() => setShow(false)}>
                  <a href="#" className="nav__link">
                    <i className="bx bxs-award"></i>Certificates
                  </a>
                </li>

                <li className="nav__item" onClick={() => setShow(false)}>
                  <a href="#" className="nav__link">
                    <i className="bx bx-link-external"></i>References
                  </a>
                </li>
              </ul>
            </animated.div>
          ) : null;
        })}

        <div className="nav__toggle" id="nav-toggle" onClick={() => setShow(!show)}>
          <i className="bx bxs-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
}
