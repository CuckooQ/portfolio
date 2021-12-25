import React from "react";
import Wave from "../Wave";
import Planet from "../Planet";
import SectionWrapper from "../SectionWrapper";
import { OS, getOS } from "../../utils/os";
import "../../styles/Visual.scss";

function Visual() {
  return (
    <SectionWrapper className="visual-wrapper">
      {getOS() === OS.MAC || getOS() === OS.IOS ? (
        // To support Cross Platform
        <Planet className="visual" />
      ) : (
        <Wave className="visual" />
      )}
      <p className="text-wrapper">
        <span>HI,</span>
        <br />
        <span>I'M JAEYONG CHO,</span>
        <br />
        <span>FRONT-END DEVELOPER.</span>
        <br />
        <span>I'M PASSIONATE TO DEVELOPMENT.</span>
        <br />
        <span>I'M NOT AFRAID OF CHALLENGES.</span>
        <br />
        <span>I LIKE A CAT, GRAPEFRUIT, AND MUSIC.</span>
        <br />
        <span>LET'S GO PLUS ULTRA!</span>
      </p>
    </SectionWrapper>
  );
}

export default Visual;
