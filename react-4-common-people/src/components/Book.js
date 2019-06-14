import React from 'react';

const Book = (props) => (
  <div className="book">
    <img className="cover" alt="Titulo" src={`./books/${props.cover}`} />
    <h3 className="title">{props.title}</h3>
    <span className="price">{props.price}</span>
    <button>Añadir a mi cesta</button>
  </div>
);

export default Book;