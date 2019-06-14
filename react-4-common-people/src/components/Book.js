import React from 'react';

const Book = (props) => (
  <div className="book">
    <img className="cover" alt="Titulo" src="./books/cover01.jpg" />
    <h3 className="title">ANNA FRANK. EL TESTIMONI DE L'HOLOCAUST</h3>
    <span className="price">14,20€</span>
    <button>Añadir a mi cesta</button>
  </div>
);

export default Book;