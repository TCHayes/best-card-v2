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
        <label htmlFor="userName">Username:</label>
        <input type='text' id="userName"></input>
        <label htmlFor="password">Password:</label>
        <input type='text' id="password"></input>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  )
}
