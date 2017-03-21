import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//***** temp import for testing *****
import CategoryList from './components/category-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
{/* below div added to render components for testing */}
        <div> <CategoryList /> </div>

      </div>
    );
  }
}

export default App;
