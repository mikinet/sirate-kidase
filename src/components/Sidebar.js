import { useState } from "react";
import "./sidebar.css";

const Sidebar = (props) => {
  const [sidebarStatus, setSidebarStatus] = useState("expanded-sidebar");
  const [toggle, setToggle] = useState("expand"); // to control sidebar toggle button

  // determine what happens when user clicks on the sidebar toggle button
  const toggleClickHandler = (e) => {
    e.preventDefault();
    if (e.target.id === "expand") {
      setToggle("collapse");
      setSidebarStatus("collapsed-sidebar");
    } else {
      setToggle("expand");
      setSidebarStatus("expanded-sidebar");
    }
  };

  // when the user selects (clicks on) a book title, send the book title to App
  const onSelectABook = (e) => {
    e.preventDefault();
    const item = e.target;
    props.onSelect(item.name);
  };

  return (
    <div className={sidebarStatus} id="sidebar">
      <h2 className="title book-titles">ቅዱሳት መጻሕፍት</h2>
      <span
        className="show-hide"
        id={toggle}
        onClick={toggleClickHandler}
      ></span>
      {props.books.map((bookBundle, index) => (
        <div key={index} className="list-group">
          <h3 className={`subtitle ${bookBundle.category}-books`}>
            {bookBundle.categoryName}
          </h3>
          <ul
            className={`books-list ${bookBundle.category}-books-list`}
            id={`${bookBundle.category}-book`}
          >
            {bookBundle.books.map((book, index) => (
              <li
                key={index}
                className={`${bookBundle.category}-list-item
                }`}
                id={`${bookBundle.category}-book-${index}`}
              >
                <button
                  className="link li-link"
                  href="#"
                  onClick={onSelectABook}
                  name={book.title}
                >
                  {book.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Sidebar;
