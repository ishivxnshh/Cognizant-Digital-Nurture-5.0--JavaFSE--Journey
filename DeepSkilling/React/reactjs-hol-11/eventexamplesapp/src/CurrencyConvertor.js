import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: '', currency: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle the Click event of the button to invoke handleSubmit
  handleSubmit(e) {
    e.preventDefault();
    // Converts based on the provided output image showing 80 * 80 = 6400
    const convertedAmount = parseFloat(this.state.amount) * 80;
    alert("Converting to " + this.state.currency + " Amount is " + convertedAmount);
  }

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'inline-block', width: '80px' }}>Amount: </label>
            <input 
              type="number" 
              value={this.state.amount} 
              onChange={e => this.setState({ amount: e.target.value })} 
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'inline-block', width: '80px' }}>Currency: </label>
            <input 
              type="text" 
              value={this.state.currency} 
              onChange={e => this.setState({ currency: e.target.value })} 
            />
          </div>
          <button type="submit" style={{ marginLeft: '80px' }}>Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
