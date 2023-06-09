import { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

export default function Scrolltop() {
  const [show, setShow] = useState(false);
  const transition = useTransition(show, {
    from: { y: 100, opacity: 0.5 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 100, opacity: 0 },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return transition((style, item) => {
    return item ? (
      <animated.a href="#" className="scrolltop" style={style}>
        <i className="bx bx-up-arrow-alt"></i>
      </animated.a>
    ) : null;
  });
}
