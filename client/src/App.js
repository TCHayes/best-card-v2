import React, { Component } from 'react';
import '../public/css/main.css';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

class App extends Component {

    logout(e) {
        cookie.remove('token');
        cookie.remove('headers');
        browserHistory.replace('/welcome');

    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className='app-title'>BestCard</h2>
        </div>
        {this.props.children}
        <button className='logout' onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default App;
