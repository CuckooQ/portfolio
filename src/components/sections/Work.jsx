import WorkCard from "../WorkCard";
import SectionWrapper from "../SectionWrapper";
import PATH from "../../constants/PATH";
import "../../styles/Work.scss";

function Work(props) {
  const { page, setPage, works } = props;

  const PAGING = {
    PREV: "prev",
    NEXT: "next",
  };

  function getWorkClassName(idx) {
    return idx + 1 === page ? "selected" : "";
  }

  function handlePagingClick(e) {
    const action = e.target.dataset.action;
    action === PAGING.PREV && setPage(page - 1);
    action === PAGING.NEXT && setPage(page + 1);
  }

  return (
    <SectionWrapper className="work-wrapper" id={PATH.INNER.WORK} title="WORK">
      <div className="contents">
        <div className="works">
          {works.map((work, idx) => (
            <WorkCard className={getWorkClassName(idx)} key={idx} work={work} />
          ))}
        </div>
        <div className="controls-wrapper" onClick={handlePagingClick}>
          <div className="controls">
            {page !== 1 ? (
              <div className="prev" data-action={PAGING.PREV}>
                ❮
              </div>
            ) : null}
            {page !== works.length ? (
              <div className="next" data-action={PAGING.NEXT}>
                ❯
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Work;
