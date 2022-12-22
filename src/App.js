import logo from "./eotc-logo.jpeg";
import { useState } from "react";
import allBooks from "./booksCollection.json";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Main from "./components/Main.js";
import "./App.css";

// import all images
function importAll(r) {
  return r.keys().map(r);
}
const allImages = importAll(require.context("./images", true, /\.jpg$/));

function App() {
  // declare state variables and assign initial values
  const [selectedBook, setSelectedBook] = useState("sirate_kidase");
  // filter allImages that are part of the selected book
  const bookFiles = allImages.filter((image) =>
    image.includes(selectedBook)
  );

  // organise the pieces of information to be sent to <Sidebar/> component
  const allBooksList = allBooks.map((booksList) => ({
    category: booksList.category,
    categoryName: booksList.categoryName,
    books: booksList.books.map((book, i) => ({
      id: book.id,
      title: book.title,
      name: book.name,
    })),
  }));

  return (
    <div className="App">
      <Header logo={logo} />
      <Sidebar
        className="collapsed-sidebar"
        onSelect={(title) => setSelectedBook(title)}
        books={allBooksList}
      />
      <Main bookTitle={selectedBook} bookFiles={bookFiles} />
    </div>
  );
}

export default App;
