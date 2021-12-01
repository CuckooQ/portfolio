import React from "react";
import Wave from "./Wave";
import Planet from "./Planet";
import { OS, getOS } from "../utils/environments/os";
import "../styles/Visual.scss";

function Visual() {
  return (
    <section className="visual-wrapper">
      {getOS() === OS.MAC || getOS() === OS.IOS ? (
        <Planet className="visual" />
      ) : (
        <Wave className="visual" />
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