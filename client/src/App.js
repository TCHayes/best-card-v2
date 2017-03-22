import React, { Component } from 'react';
import './App.css';

import cookie from 'react-cookie';

class App extends Component {

  render() {
    return (
      <div className="App">
        <button onClick={() => { cookie.save('token', 'Dave')}}>Login as Dave</button>
        <div className="App-header">
          <h2 className='app-title'>BestCard</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
