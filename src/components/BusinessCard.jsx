import { useRef, useState } from "react";
import QRCode from "./QRCode";
import URL from "../constants/URL";
import "../styles/BusinessCard.scss";

function BusinessCard() {
  const emailRef = useRef();
  const emailTooltipRef = useRef();
  const [isFlipped, setFlipped] = useState(false);

  function copyEmail(e) {
    e.stopPropagation();

    navigator.clipboard
      .writeText(emailRef.current.textContent)
      .then(() => {
        emailTooltipRef.current.style.visibility = "visible";
        setTimeout(() => {
          emailTooltipRef.current.style.visibility = "hidden";
        }, 1000);
      })
      .catch((_err) => {
        alert("email copy failed.");
      });
  }

  return (
    <div
      className={`business-card ${isFlipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!isFlipped)}
    >
      <div className="front">
        <div className="layer">
          <h1>CUCKOOQ</h1>
          {Array(4)
            .fill()
            .map((_, idx) => (
              <div className="corner" key={idx}></div>
            ))}
        </div>
      </div>
      <div className="back">
        <h2 className="title">Jaeyong Cho</h2>
        <div className="contents">
          <div className="content">
            <div className="sub-title">Email</div>
            <span
              ref={emailRef}
              className="sub-content email"
              onClick={copyEmail}
            >
              jaeyong4536@gmail.com
            </span>
            <span ref={emailTooltipRef} className="tooltip">
              Copied!
            </span>
          </div>
          <div className="content">
            <div className="sub-title">Github</div>
            <span className="sub-content">
              <a
                href={URL.GITHUB}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                github.com/CuckooQ
              </a>
            </span>
          </div>
        </div>
        <div className="qr-code">
          <QRCode />
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
