import React from 'react';
import '../../public/css/main.css';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import basic from 'basic-authorization-header';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const headers = {'Authorization': basic(this.username.value, this.password.value)};
    console.log(headers);
    cookie.save('token', this.username.value);
    cookie.save('headers', headers);
    const path = '/';
    browserHistory.push(path);
  }

  render(){
    return (
      <div className='login-page'>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">Username:</label>
          <input type='text' id="username" ref={ref => this.username = ref}></input>
          <label htmlFor="password">Password:</label>
          <input type='text' id="password" ref={ref => this.password = ref}></input>
          <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    )
  }
}
