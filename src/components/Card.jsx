import { useState } from "react";
import "../styles/Card.scss";

function Card(props) {
  const { children, tooltips } = props;
  const [showTooltip, setShowTooltip] = useState(false);

  const className = `card ${tooltips ? "tooltips" : ""}`;

  function handleClick() {
    setShowTooltip(!showTooltip);
  }

  return (
    <div className={className} onClick={handleClick}>
      <div className="content">{children}</div>
      {tooltips ? <div className="tooltip-alert">i</div> : null}
      {tooltips
        ? tooltips.map(({ text, link }, idx) => {
            let className = "tooltip ";
            switch (idx) {
              case 0: {
                className += "right";
                break;
              }
              case 1: {
                className += "left";
                break;
              }
              case 2: {
                className += "left bottom";
                break;
              }
              case 3: {
                className += "right bottom";
                break;
              }
              default:
            }
            className += showTooltip ? " show" : "";
            return (
              <div className={className} key={idx}>
                {link ? (
                  <a href={link} rel="noreferrer" target="_blank">
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Card;
