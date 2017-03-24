import React from 'react';
import '../../public/css/main.css';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import basic from 'basic-authorization-header';
import * as actions from '../actions';
import { connect } from 'react-redux';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const headers = {'Authorization': basic(this.username.value, this.password.value)};
    cookie.save('token', this.username.value);
    cookie.save('headers', headers);
    this.props.dispatch(actions.setUsername(this.username.value));
    const path = '/';
    browserHistory.push(path);
  }

  render(){
    return (
      <div className='login-page'>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">Username:</label>
          <input type='text' id="username" ref={ref => this.username = ref} placeholder="Username"></input>
          <label htmlFor="password">Password:</label>
          <input type='password' id="password" ref={ref => this.password = ref} placeholder="Password"></input>
          <button type='submit' className='btn submit-btn'>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(Login);
