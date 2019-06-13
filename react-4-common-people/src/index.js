import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Stateless function component
/* const Welcome = function(props) {
  return <div>
  <h1>Hello, {this.props.name}!</h1>
  <h2>It is {new Date().toLocaleString()}.</h2>
</div>;
} */ 

const welcomings = ["Hello", "Hallo", "Hola", "Ciao", "Bonjour", "Привет", "こんにちは", "مرحبا", "Olá", "Kaixo"];

// Stateful class component
class Welcome extends React.Component {
  counter = 0; // class attributes does NOT re-render the component

  constructor() {
    super();
    this.state = {
      hello: welcomings[0],
      date: new Date(),
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  };

  // Component will update ONLY if expression is true
  shouldComponentUpdate() {
    return this.counter % 5 === 0;
  }

  // Run code AFTER component updates
  componentDidUpdate() {
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.counter++;
    const random = Math.floor(Math.random() * (welcomings.length));
    this.setState({
      date: new Date(),
      hello: welcomings[random],
    });
  }

  render() {
    return <div>
      <h1>{this.state.hello}, {this.props.name}!</h1>
      <h2>It is {this.state.date.toLocaleString()}.</h2>
    </div>;
  }
}

ReactDOM.render(<Welcome name={"common people"} />, document.getElementById('root'));