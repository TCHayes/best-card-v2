import React from 'react';
import '../../public/css/main.css'
import { Link } from 'react-router';

export default function Welcome (props) {

  return (
    <div className=''>
      <form>
        First Name: <input type='text' name="firstName"></input>
        Last Name: <input type='text' name="lastName"></input>
        Username: <input type='text' name="userName"></input>
        Password: <input type='text' name="password"></input>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  )
}
