import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 5 }; // Starting value based on the lab images[cite: 6]
    
    // Use this keyword to bind event handlers[cite: 6]
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  // Invoke multiple methods: increment value and Say Hello[cite: 6]
  handleIncrement() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
    alert("Hello! Member1");
  }

  // Decrease the value of the counter[cite: 6]
  handleDecrement() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  // Takes “welcome” as an argument[cite: 6]
  sayWelcome(message) {
    alert(message);
  }

  // Invokes synthetic event to display “I was clicked”[cite: 6]
  handlePress(event) {
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <p>{this.state.counter}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px' }}>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={() => this.sayWelcome('welcome')}>Say welcome</button>
          <button onClick={this.handlePress}>Click on me</button>
        </div>

        {/* Display the CurrencyConvertor component[cite: 6] */}
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
