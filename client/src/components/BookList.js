import React, { useState } from "react";
import { graphql } from "react-apollo";

import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList(props) {
  const [selectedBook, setSelectedBook] = useState(null);

  const displayBooks = () => {
    let data = props.data;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return data.books.map((book) => {
        return (
          <li key={book.id} onClick={(e) => setSelectedBook(book.id)}>
            {book.name}
          </li>
        );
      });
    }
  };

  return (
    <div id="main">
      <ul id="book-list">{displayBooks()}</ul>
      <BookDetails bookId={selectedBook} />
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
