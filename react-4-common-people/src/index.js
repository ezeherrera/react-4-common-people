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

// Stateful class component
class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <div>
      <h1>Hello, {this.props.name}!</h1>
      <h2>It is {this.state.date.toLocaleString()}.</h2>
    </div>;
  }
}

ReactDOM.render(<Welcome name={"common people"} />, document.getElementById('root'));