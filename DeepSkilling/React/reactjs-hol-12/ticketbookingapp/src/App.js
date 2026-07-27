import React, { Component } from 'react';

// 1. Create the specific greeting components
function UserGreeting(props) {
  return <h1>Welcome back</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

// 2. Implement the Greeting component from the hint to evaluate state
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// 3. Implement the Login and Logout button components from the hints[cite: 7]
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// 4. Main App component to manage state and element variables[cite: 7]
class App extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    
    // Initial state set to false (Guest view)
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    // Define element variables[cite: 7]
    let button;

    // Implement conditional rendering for the buttons[cite: 7]
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div style={{ padding: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif' }}>
        {/* Pass the state to the Greeting component[cite: 7] */}
        <Greeting isLoggedIn={isLoggedIn} />
        
        {/* Render the conditionally assigned element variable[cite: 7] */}
        <div>{button}</div>
      </div>
    );
  }
}

export default App;
