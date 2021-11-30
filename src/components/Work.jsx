import WorkCard from "./WorkCard";
import "../styles/Work.scss";

function Work(props) {
  const { works, page, setPage } = props;
  const PAGING = {
    PREV: "prev",
    NEXT: "next",
  };

  return (
    <section className="work-wrapper" id="work">
      <h1 className="title">WORK</h1>
      <div className="contents">
        <div className="works">
          {works.map((work, idx) => (
            <WorkCard
              className={idx + 1 === page ? "selected" : ""}
              key={idx}
              work={work}
            />
          ))}
        </div>
        <div
          className="controls-wrapper"
          onClick={(e) => {
            const action = e.target.dataset.action;
            action === PAGING.PREV && setPage(page - 1);
            action === PAGING.NEXT && setPage(page + 1);
          }}
        >
          <div className="controls">
            {page !== 1 && (
              <div className="prev" data-action={PAGING.PREV}>
                ❮
              </div>
            )}

            {page !== works.length && (
              <div className="next" data-action={PAGING.NEXT}>
                ❯
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
