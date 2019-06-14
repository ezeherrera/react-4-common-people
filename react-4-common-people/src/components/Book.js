import React from 'react';

const Book = (props) => (
  <div className="book">
    <img className="cover" alt="Titulo" src={`./books/${props.cover}`} />
    <h3 className="title">{props.title}</h3>
    <span className="price">{parseFloat(props.price).toFixed(2)}€</span>
    <button onClick={props.onAddToBasket}>Añadir a mi cesta</button>
  </div>
);

export default Book;