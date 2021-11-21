import { useState } from "react";
import "../styles/Card.scss";

function Card(props) {
  const [showTooltip, setTooltip] = useState(false);
  const { tooltips } = props;

  return (
    <div
      className={`card ${tooltips ? "tooltips" : ""}`}
      onClick={() => setTooltip(!showTooltip)}
    >
      <div className="content">{props.children}</div>
      {tooltips && <div class="tooltip-alert">i</div>}
      {tooltips &&
        tooltips.map(({ text, link }, idx) => {
          let classes = "tooltip ";
          switch (idx) {
            case 0: {
              classes += "right";
              break;
            }
            case 1: {
              classes += "left";
              break;
            }
            case 2: {
              classes += "left bottom";
              break;
            }
            case 3: {
              classes += "right bottom";
              break;
            }
            default:
          }
          return (
            <div className={classes + (showTooltip ? " show" : "")} key={idx}>
              {link ? (
                <a href={link} target="_blank" rel="noreferrer">
                  {text}
                </a>
              ) : (
                <span>{text}</span>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Card;
