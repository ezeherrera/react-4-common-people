import React from 'react';

const Basket = () => (
  <sidebar className="basket">

    <h2>Tu cesta</h2>

    <ul className="details">

      <li className="item">
        <h4 className="title">ANNA FRANK. EL TESTIMONI DE L'HOLOCAUST</h4>
        <span className="price">14,20€</span>
        <button>Quitar</button>
      </li>
    </ul>
    <div className="total">
      <span className="price label">Total</span>
      <span className="price">14,20€</span>
    </div>
    <button className="checkout">Comprar</button>
  </sidebar>
);

export default Basket;