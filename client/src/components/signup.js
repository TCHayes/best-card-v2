import React from 'react';
import '../../public/css/main.css'
import { Link } from 'react-router';
import * as actions from '../actions';
import {connect} from 'react-redux';

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
  }

  render(){
    return (
      <div className='signup-page'>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input type='text' id="firstName"
                            ref={ref => this.firstName = ref}></input>
          <label htmlFor="lastName">Last Name:</label>
          <input type='text' id="lastName"
                            ref={ref => this.lastName = ref}></input>
          <label htmlFor="username">Username:</label>
          <input type='text' id="username"
                            ref={ref => this.username = ref}></input>
          <label htmlFor="password">Password:</label>
          <input type='text' id="password"
                            ref={ref => this.password = ref}></input>
          <button type='submit' className='btn'>Submit</button>
        </form>
      </div>
    )
  }
}


export default connect()(Signup);
