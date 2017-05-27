import React from 'react';
import '../../public/css/main.css'
import { Link } from 'react-router';
import Login from './login';

export default function Welcome (props) {

  return (
    <div className='welcome-container'>
      <Login />
    </div>
  )
}
