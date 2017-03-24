import React from 'react';
import '../../public/css/main.css';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import * as actions from '../actions';
import { connect } from 'react-redux';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    cookie.save('token', this.username.value);
    this.props.dispatch(actions.setUsername(this.username.value));
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
          <input type='text' id="password"></input>
          <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(Login);
