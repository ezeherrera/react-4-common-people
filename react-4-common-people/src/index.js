import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* imported components */
import Header from './components/Header';
import Basket from './components/Basket';
import List from './components/List';

/* mockup data */
import books from './data';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      basket: [],
    }
  }

  addBookToBasket(book){
    this.setState(state => {
      const basket = state.basket;
      basket.push(book);
      return { basket };
    });
  }

  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <Basket items={this.state.basket} />
          <List
            books={books}
            onAddBookToBasket={(book) => this.addBookToBasket(book)}
          />
        </main>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));