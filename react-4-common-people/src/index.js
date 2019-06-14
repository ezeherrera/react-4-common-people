import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* imported components */
import Header from './components/Header';
import Basket from './components/Basket';
import List from './components/List';

/* mockup data */
import books from './data';

const App = () => (
  <div>
    <Header />
    <main className="container">
      <Basket />
      <List books={books} />
    </main>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));