import React from 'react';

import Book from './Book';

const List = (props) => (
  <ul className="list">
    { props.books.map( function(book) {
      return (
        <li className="item" key={book.id}>
          <Book
            cover={book.cover}
            title={book.title}
            price={book.price}
            onAddToBasket={() => props.onAddBookToBasket(book)}
          />
        </li>
      )
    })}
  </ul>
);

export default List;