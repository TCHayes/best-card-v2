import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state, props) {
   let bestPercent = -1;
   let bestCard = '';
   let selection = props.selection.toLowerCase();

   state.cards.forEach(card => {
     if (card.categories[selection] > bestPercent){
       bestPercent = card.categories[selection];
       bestCard = card.name;
     }
   });

   return {
     bestCard: bestCard,
     bestPercent: bestPercent
   }
}

export function Card (props) {
  //selection will be passed in from parent component Recommendation

  return (
    <div id='card-recommendation'>
      <h2>{props.bestCard}</h2>
      <br></br>
      <h3>{`${props.bestPercent * 100}% Back`}</h3>
    </div>
  )
}

export default connect(mapStateToProps)(Card);
