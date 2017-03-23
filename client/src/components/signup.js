import React from 'react';
import '../../public/css/main.css'
import { Link } from 'react-router';

export default function Signup (props) {

  return (
    <div className='signup-page'>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type='text' id="firstName"></input>
        <label htmlFor="lastName">Last Name:</label>
        <input type='text' id="lastName"></input>
        <label htmlFor="username">Username:</label>
        <input type='text' id="username"></input>
        <label htmlFor="password">Password:</label>
        <input type='text' id="password"></input>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  )
}


{/* <form onSubmit={this.props.dispatch(actions.addUser(
  {firstName: document.getElementById("firstName").value,
  lastName: document.getElementById("lastName").value,
  username: document.getElementById("username").value,
  password: document.getElementById("password").value}
))}> */}
