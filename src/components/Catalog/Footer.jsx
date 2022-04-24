import { useDispatch, useSelector } from "react-redux";
import {
  selectPages,
  setPageToShow,
  setPageWithArrow,
} from "../../app/slices/catalogSlice";

export const Footer = () => {
  const pages = useSelector(selectPages);
  const dispatch = useDispatch();
  const onGetCurrentPage = (event) => {
    let prevPage = document.querySelector(".current-page");
    if (event.target.className !== "current-page") {
      event.target.className = "current-page";
      prevPage.classList.remove("current-page");
      dispatch(setPageToShow(+event.target.id));
    }
  };
  const handleNextPage = () => {
    let prevPage = document.querySelector(".current-page");
    if (prevPage.nextSibling.className !== "current-page") {
      prevPage.nextSibling.className = "current-page";
      prevPage.classList.remove("current-page");
      dispatch(setPageWithArrow(true));
    }
  };
  const handlePrevPage = () => {
    let prevPage = document.querySelector(".current-page");
    if (prevPage.previousSibling.className !== "current-page") {
      prevPage.previousSibling.className = "current-page";
      prevPage.classList.remove("current-page");
      dispatch(setPageWithArrow(false));
    }
  };
  return (
    <>
      {pages.length !== 0 && (
        <div className={"catalog__bar pages-bar"}>
          {" "}
          <p className="page-arrow" onClick={handlePrevPage}>
            ←
          </p>
          <ul>
            {pages.map((page, i) => (
              <li
                key={page}
                id={page}
                className={i === 0 ? "current-page" : undefined}
                onClick={onGetCurrentPage}
              >
                {page}
              </li>
            ))}
          </ul>
          <p className="page-arrow" onClick={handleNextPage}>
            →
          </p>
        </div>
      )}
    </>
  );
};
