import { useRef, useState, useEffect } from "react";
import "../styles/FadeIn.scss";

function FadeIn({ children, direction, delay, auto = false }) {
  const ref = useRef();
  const [show, setShow] = useState(false);
  const [delayClassName, setDelayClassName] = useState(0);
  useEffect(() => {
    if (!auto) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            setShow(true);
          }
        });
      });
      observer.observe(ref.current);
    } else {
      setTimeout(() => {
        setShow(true);
      }, 500);
    }
  }, [auto]);
  useEffect(() => {
    delay && setDelayClassName(`delay-${delay}`);
  }, [delay]);

  return (
    <div className="fade-in-wrapper" ref={ref}>
      {children}
      <div
        className={`fade-in ${direction ? direction : ""} ${
          show ? "show" : ""
        } ${delayClassName}`}
      ></div>
    </div>
  );
}

export default FadeIn;
