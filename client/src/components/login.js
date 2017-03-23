import React from 'react';
import '../../public/css/main.css'
import { Link } from 'react-router';
import cookie from 'react-cookie';

export default function Login (props) {

  return (
    <div className='login-page'>
      <form onSubmit={() => {cookie.save('token', document.getElementById("userName").value)}}>
        <label htmlFor="userName">Username:</label>
        <input type='text' id="userName"></input>
        <label htmlFor="password">Password:</label>
        <input type='text' id="password"></input>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  )
}
