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
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      username: this.username.value,
      password: this.password.value
    }
    this.props.dispatch(actions.addUser(formData));
    this.props.dispatch(actions.setUsername(this.username.value));
    const headers = {'Authorization': basic(this.username.value, this.password.value)};
    cookie.save('headers', headers);
    cookie.save('token', this.username.value);
    const path = '/allCards';
    browserHistory.push(path);
  }

  render(){
    return (
      <div className='signup-page'>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input type='text' id="firstName"
                            ref={ref => this.firstName = ref}
                            placeholder="First name"></input>
          <label htmlFor="lastName">Last Name:</label>
          <input type='text' id="lastName"
                            ref={ref => this.lastName = ref}
                            placeholder="Last name"></input>
          <label htmlFor="username">Username:</label>
          <input type='text' id="username"
                            ref={ref => this.username = ref}
                            placeholder="Username"></input>
          <label htmlFor="password">Password:</label>
          <input type='password' id="password"
                            ref={ref => this.password = ref}
                            placeholder="Password"></input>
          <button type='submit' className='btn submit-btn'>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect()(Signup);
