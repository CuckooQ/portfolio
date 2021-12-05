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
      <div className="text-wrapper">
        <div>HI,</div>
        <div>I'M JAEYONG CHO,</div>
        <div>FRONT-END DEVELOPER.</div>
        <div>I'M PASSIONATE TO DEVELOPMENT.</div>
        <div>I'M NOT AFRAID OF CHALLENGES.</div>
        <div>I LIKE A CAT, GRAPEFRUIT, AND MUSIC.</div>
        <div>LET'S GO PLUS ULTRA!</div>
      </div>
    </SectionWrapper>
  );
}

export default Visual;
