import React from 'react';
import '../../public/css/main.css'
import { Link } from 'react-router';

export default function Welcome (props) {

  return (
    <div className='welcome-container'>
      <Link to="/login" ><button className='btn'>Login</button></Link>
      <Link to="/signup" ><button className='btn'>Sign Up</button></Link>
    </div>
  )
}
