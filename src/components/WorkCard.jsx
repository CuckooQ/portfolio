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
    function handleResize() {
      throttle(onResize, 200);
    }

    window.addEventListener("resize", handleResize);
    onResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [work.cover.image, work.cover.subImage]);

  const wordCardClassName = `work-card-wrapper ${className} ${
    work.contents.length === 0 ? "disabled" : ""
  }`;

  function handleButtonClick() {
    window.open(`${work.cover.url}`, "_blank");
  }

  function handleClickInnerPaging(e) {
    const target = e.target.dataset.order;
    target && setPage(Number(target));
  }

  return (
    <div className={wordCardClassName}>
      <div className="cover">
        <img src={image} alt={work.cover.alt} />
        {work.cover.url ? (
          <Button className="cover-btn" click={handleButtonClick}>
            VIEW SITE
          </Button>
        ) : null}
        {work.cover.text ? (
          <span className="cover-text">{work.cover.text}</span>
        ) : null}
      </div>
      <ul className="contents">
        {work.contents.map((content, idx) => {
          const className = `content-item ${page === idx + 1 ? "show" : ""}`;

          return (
            <li className={className} key={idx}>
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

      {work.contents.length > 1 ? (
        <nav className="pagination" onClick={handleClickInnerPaging}>
          <ul>
            {work.contents.map((_, idx) => {
              const className = `${page === idx + 1 ? "active" : ""}`;

              return (
                <li className={className} data-order={idx + 1} key={idx}></li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}

export default WorkCard;
