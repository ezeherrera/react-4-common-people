import React from 'react';

import Book from './Book';

const List = (props) => (
  <ul className="list">
    { props.books.map( function(book) {
      return (
        <li className="item" id={book.id}>
          <Book
            cover={book.cover}
            title={book.title}
            price={book.price}
          />
        </li>
      )
    })}
  </ul>
);

export default List;