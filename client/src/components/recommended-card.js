import React from 'react';
import '../../public/css/main.css';

export default function RecommendedCard (props) {

  return (
    <div className='btn results-btn'>
      <div className='card-text'>
        {props.name}<br />
        {`${props.percent * 100}% Back`}
      </div>
    </div>
  )
}
