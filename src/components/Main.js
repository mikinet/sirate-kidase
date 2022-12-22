import { useState } from "react";
import "./main.css";

const Main = (props) => {
  const title = props.bookTitle;
  const numPages = props.bookFiles.length;
  const [fileName, setFileName] = useState(props.bookFiles[0]);
  const [pageNum, setPageNum] = useState(0);
  
  // reset variables if different book is selected
  if (!fileName.includes(title)) {
    setFileName(props.bookFiles[0]);
    setPageNum(0);
  }

  const controlPageNavigation = (e) => {
    e.preventDefault();
    if (e.target.id === "next" && pageNum < numPages - 1) {
      setPageNum(pageNum + 1);
      setFileName(props.bookFiles[pageNum + 1]);
    }
    if (e.target.id === "prev" && pageNum > 0) {
      setPageNum(pageNum - 1);
      setFileName(props.bookFiles[pageNum - 1]);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="main-content" id="main">
      <div>
        <img src={fileName} alt="palceholder" />
      </div>
      <div className="nav page-nav">
        <span
          className="navigation-arrow arrow-prev"
          id="prev"
          onClick={controlPageNavigation}
        >
          Previous
        </span>
        <span>Page {pageNum+1} of {numPages}</span>
        <span
          className="navigation-arrow arrow-next"
          id="next"
          onClick={controlPageNavigation}
        >
          Next
        </span>
      </div>
    </main>
  );
};
export default Main;
