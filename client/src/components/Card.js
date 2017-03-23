import React from 'react';
import '../../public/css/main.css'

export default function Card (props) {

    let content;
    if (props.percent) {
        content = `${props.percent * 100}% Back`;
    }

  return (
    <div className='btn results-btn'>
      <div className='card-text'>
        {props.name}<br />
        {content}
      </div>
    </div>
  )
}
