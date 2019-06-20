import React from 'react';

class Basket extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <sidebar className="basket">

        <h2>Tu cesta</h2>

        <ul className="details">
        { this.props.items.map(item => (
          <li className="item" key={item.id}>
            <h4 className="title">{item.title}</h4>
            <span className="price">{parseFloat(item.price).toFixed(2)}€</span>
            <button>Quitar</button>
          </li>
        ))}
        </ul>

        <div className="total">
          <span className="price label">Total</span>
          <span className="price">{this.props.total.toFixed(2)}€</span>
        </div>
        <button className="checkout">Comprar</button>
      </sidebar>
    );
  };
};

export default Basket;