import React from 'react';
import '../../public/css/main.css';
import * as actions from '../actions';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import basic from 'basic-authorization-header';

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    let formData = {
      email: this.email.value,
      password: this.password.value,
    }
    this.props.dispatch(actions.addUser(formData));
    this.props.dispatch(actions.setSessionEmail(this.email.value));
    this.props.dispatch(actions.fetchCards());
    const headers = {'Authorization': basic(this.email.value, this.password.value)};
    cookie.save('headers', headers);
    cookie.save('token', this.email.value);
    const path = '/allCards';
    browserHistory.push(path);
  }

  render(){
    return (
      <div className='signup-page'>
        <form onSubmit={this.onSubmit} className='form'>
          <input type='email' id="email"
                            ref={ref => this.email = ref}
                            placeholder="Email"></input>
          <input type='password' id="password"
                            ref={ref => this.password = ref}
                            placeholder="Password"></input>
          <button type='submit' className='btn submit-btn'>SIGN UP</button>
        </form>
      </div>
    )
  }
}

export default connect()(Signup);
