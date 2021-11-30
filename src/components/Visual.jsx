import React from "react";
import Wave from "./Wave";
import { OS, getOS } from "../utils/os";
import "../styles/Visual.scss";

function Visual(props) {
  return (
    <section className="visual-wrapper" id="home">
      {getOS() === OS.MAC ? (
        <img className="wavey-scene" src="/images/wavey.jpg" alt="Wave"></img>
      ) : (
        <Wave className="wavey-scene" />
      )}
      <div className="text-wrapper">
        <span className="text">HI,</span>
        <span className="text">I'M JAEYONG CHO,</span>
        <span className="text">FRONT-END DEVELOPER.</span>
        <span className="text">I'M PASSIONATE TO DEVELOPMENT.</span>
        <span className="text">I'M NOT AFRAID OF CHALLENGES.</span>
        <span className="text">I LIKE A CAT, GRAPEFRUIT, AND MUSIC.</span>
        <span className="text">LET'S GO PLUS ULTRA!</span>
      </div>
    </section>
  );
}

export default Visual;
