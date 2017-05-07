import React, { Component } from 'react';
import '../public/css/main.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className='app-title'>BestCard</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
