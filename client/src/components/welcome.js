import React from 'react';
import '../../public/css/main.css'
import { Link } from 'react-router';

export default function Welcome (props) {

  return (
    <div className=''>
      <Link to="/" ><button className='btn'>Login</button></Link>
      <Link to="/" ><button className='btn'>Sign Up</button></Link>
    </div>
  )
}
