import { useState, useEffect } from "react";
import { throttle } from "lodash";
import Button from "./Button";
import { VIEWPORT_SIZE, getViewportSize } from "../utils/viewportSize";
import "../styles/WorkCard.scss";

function WorkCard(props) {
  const { className, work } = props;
  const [page, setPage] = useState(1);
  const [image, setImage] = useState();

  useEffect(() => {
    const onResize = () => {
      getViewportSize() > VIEWPORT_SIZE.TABLET && setImage(work.cover.image);
      getViewportSize() <= VIEWPORT_SIZE.TABLET && setImage(work.cover.image);
      getViewportSize() <= VIEWPORT_SIZE.MOBILE &&
        setImage(work.cover.subImage);
    };
    window.addEventListener("resize", throttle(onResize, 200));
    onResize();
  }, [work.cover.image, work.cover.subImage]);

  return (
    <div
      className={`work-card-wrapper ${className} ${
        work.contents.length === 0 ? "disabled" : ""
      }`}
    >
      <div className="cover">
        <img src={image} alt={work.cover.alt} />
        {work.cover.url && (
          <Button
            className="cover-btn"
            click={() => {
              window.open(`${work.cover.url}`, "_blank");
            }}
          >
            VIEW SITE
          </Button>
        )}
        {work.cover.text && (
          <span className="cover-text">{work.cover.text}</span>
        )}
      </div>
      <ul className="contents">
        {work.contents.map((content, idx) => {
          return (
            <li
              className={`content-item ${page === idx + 1 ? "show" : ""}`}
              key={idx}
            >
              <h2 className="title">{content.title}</h2>
              <ul className="items">
                {content.items.map((item, idx) => {
                  return (
                    <li className="item" key={`item${idx}`}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>

      {work.contents.length > 1 && (
        <nav
          className="pagination"
          onClick={(e) => {
            const target = e.target.dataset.order;
            target && setPage(Number(target));
          }}
        >
          <ul>
            {work.contents.map((_, idx) => {
              return (
                <li
                  className={`${page === idx + 1 ? "active" : ""}`}
                  key={idx}
                  data-order={idx + 1}
                ></li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default WorkCard;
