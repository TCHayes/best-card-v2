import React from 'react';
import '../../public/css/main.css';

export default function RecommendedCard (props) {
  const img_file = props.name.toLowerCase().replace(/ /g, "_");

  return (
    <div className='recommended-card-screen'>
      <div className='card-img-container'>
        <img src={`/card_images/${img_file}.png`} alt={'Recommended Card'} className='card-img' />
      </div>
      <div className='card-text'>
        {props.name}<br />
        {`${props.percent * 100}% Back`}
      </div>
    </div>
  )
}
