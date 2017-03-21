import React from 'react';
//import {connect} from 'react-redux';

export default function Card (props) {
  //selection will be passed in from parent component Recommendation
  const {selection} = props;

  //Logic to pick out best card goes here
  //const bestCard;

  //Hardcoded example below for testing
  const bestCard = {"name": "Chase Freedom Unlimited",
     "categories": {
     	"gas": 0.0225,
     	"groceries": 0.0225,
     	"restaurants": 0.0225,
     	"travel": 0.0225,
     	"other": 0.0225
     }
  }

  return (
    <div id='card-recommendation'>
      <h2>{bestCard.name}</h2>
      <br></br>
      <h3>{`${bestCard.categories[selection] * 100}% Back`}</h3>
    </div>
  )
}

 function mapStateToProps(state, props) {
   const bar = state.foo * 11 + state.baz;
   return {
     bestCard: bar
   }
 }
