import React from 'react';
import '../../public/css/main.css';
import { browserHistory, Link } from 'react-router';
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
    const headers = {'Authorization': basic(this.email.value, this.password.value)};
    cookie.save('token', this.email.value);
    cookie.save('headers', headers);
    this.props.dispatch(actions.setSessionEmail(this.email.value));
    this.props.dispatch(actions.fetchUser());
    this.props.dispatch(actions.fetchCards());
    const path = '/';
    browserHistory.push(path);
  }

  render(){
    return (
      <div className='login-page'>
        <form onSubmit={this.onSubmit} className='form'>
          <input type='email' id="email" ref={ref => this.email = ref} placeholder="email"></input>
          <input type='password' id="password" ref={ref => this.password = ref} placeholder="password"></input>
          <Link to="/forgotpass" className='forgot-pass-link message'>Forgot Password?</Link>
          <button type='submit' className='btn submit-btn'>Submit</button>
          <p>Not registered? <Link to="/signup" className='message'>Create an account</Link></p>
        </form>
      </div>
    )
  }
}

export default connect()(Login);
