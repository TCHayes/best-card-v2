import React from 'react';
//import {connect} from 'react-redux';

export default function Card (props) {
  //selection will be passed in from parent component Recommendation
  const {selection} = props

  //Logic to pick out best card goes here
  const bestCard;

  return (
    <div id='card-recommendation'>
      <h2>{bestCard.name}</h2>
      <br></br>
      <br></br>
      <h3>{`${bestCard.categories[selection] * 100}% Back`}</h3>
    </div>
  )
}
