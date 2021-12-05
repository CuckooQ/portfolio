import { useEffect, useRef, useState } from "react";
import "../styles/FadeIn.scss";

export const DIRECTION = {
  LEFT: "left",
  RIGHT: "right",
};

function FadeIn({
  children,
  direction = DIRECTION.RIGHT,
  delay,
  auto = false,
}) {
  const ref = useRef();
  const [showClassName, setShowClassName] = useState("");
  const [delayClassName, setDelayClassName] = useState("");

  useEffect(() => {
    if (!auto) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            setShowClassName("show");
          }
        });
      });
      observer.observe(ref.current);
    } else {
      setTimeout(() => {
        setShowClassName("show");
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
        className={`fade-in ${direction} ${showClassName} ${delayClassName}`}
      ></div>
    </div>
  );
}

export default FadeIn;
