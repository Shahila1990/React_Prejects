import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

//JavaScript
import {books} from "./books"
import { Book } from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
