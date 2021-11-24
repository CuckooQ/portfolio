import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Wave from "./Wave";
import "../styles/Wavey.scss";

function Wavey(props) {
  const { figure, config, updateFigure } = props;
  const backText1Ref = useRef();
  const backText2Ref = useRef();
  const backText3Ref = useRef();
  const frontText1Ref = useRef();
  const frontText2Ref = useRef();
  const frontText3Ref = useRef();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) {
        updateFigure(0.5);
      }
      if (window.innerWidth <= 1024) {
        updateFigure(0.4);
      }
      if (window.innerWidth <= 600) {
        updateFigure(0.2);
      }
    };
    window.addEventListener("resize", onResize);
  }, [updateFigure]);

  useEffect(() => {
    const unit = "rem";
    const config = {
      duration: 0.6,
      x: 0,
    };
    gsap.to(backText1Ref.current, {
      ...config,
      x: `${figure}${unit}`,
      y: `${figure}${unit}`,
    });
    gsap.to(frontText1Ref.current, config);
    gsap.to(backText2Ref.current, {
      ...config,
      x: `${figure * -20}${unit}`,
      y: `${figure}${unit}`,
    });
    gsap.to(frontText2Ref.current, {
      ...config,
      x: `${figure * -21}${unit}`,
    });
    gsap.to(backText3Ref.current, {
      ...config,
      x: `${figure * -1}${unit}`,
      y: `${figure}${unit}`,
    });
    gsap.to(frontText3Ref.current, {
      ...config,
      x: `${figure * -2}${unit}`,
    });
  }, [figure, config]);

  return (
    <section className="wavey-wrapper">
      <div className="text-wrapper">
        <h2 className="back-name" ref={backText1Ref}>
          JAEYONG CHO
        </h2>
        <h2 className="back-name" ref={backText2Ref}>
          FRONTEND DEVELOPER
        </h2>
        <h2 className="back-name" ref={backText3Ref}>
          PASSIONATE TO DEVELOPMENT
        </h2>
      </div>

      <Wave className="wavey-scene" />

      <div className="text-wrapper">
        <h2 className="front-name" ref={frontText1Ref}>
          JAEYONG CHO
        </h2>
        <h2 className="front-name" ref={frontText2Ref}>
          FRONTEND DEVELOPER
        </h2>
        <h2 className="front-name" ref={frontText3Ref}>
          PASSIONATE TO DEVELOPMENT
        </h2>
      </div>
    </section>
  );
}

export default Wavey;
