import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Welcome = function(props) {
  return <h1>Hello, {props.name}!</h1>;
}

ReactDOM.render(<Welcome name={"common people"} />, document.getElementById('root'));