import React from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import { Link } from 'react-router';

function mapStateToProps(state, props) {
   let bestPercent = 0;
   let bestCards = [];
   let selection = props.params.selection.toLowerCase();

   state.cards.forEach(card => {
     if (card.categories[selection] > bestPercent){
       bestPercent = card.categories[selection];
       bestCards = [card.name];
     }
     if (card.categories[selection] === bestPercent){
       bestCards.push(card.name);
     }
   });

   return {
     bestCards: bestCards,
     bestPercent: bestPercent
   }
}

export function Recommendation (props) {
  //props.params will be defined by the variable route '/:selection'
  const {selection} = props.params;
  const {bestPercent} = props;
  const cards = props.bestCards.map((card, index) => <Card key={index} name={card} percent={bestPercent} />)

  return (
    <div id='recommendation-container'>
      <div id='selection'>
        <h3>{selection.charAt(0).toUpperCase() + selection.slice(1)}</h3>
      </div>
      {cards}
      <Link to="/" className='back-btn'>Back</Link>
    </div>
  )
}

export default connect(mapStateToProps)(Recommendation);
