import React from 'react';
import {connect} from 'react-redux';
import RecommendedCard from './recommended-card';
import { Link } from 'react-router';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';
import '../../public/css/main.css';

function mapStateToProps(state, props) {
   let bestPercent = 0;
   let bestCards = [];
   let selection = props.params.selection.toLowerCase();

   state.userCards.forEach(card => {
     if (card.categories[selection] > bestPercent){
       bestPercent = card.categories[selection];
       bestCards = [card.name];
     }
     else if (card.categories[selection] === bestPercent){
       bestCards.push(card.name);
     }
   });

   return {
     bestCards: bestCards,
     bestPercent: bestPercent
   }
}

function logout(e) {
  cookie.remove('token');
  cookie.remove('headers');
  browserHistory.replace('/welcome');
}

export function Recommendation (props) {
  //props.params is defined by the variable route '/:selection'
  const {selection} = props.params;
  const {bestPercent} = props;
  const cards = props.bestCards.map((card, index) => <RecommendedCard key={index}
                                                          name={card}
                                                       percent={bestPercent} />)
  return (
    <div id='recommendation-container'>
      <div id='selection'>
        <h3>{selection.charAt(0).toUpperCase() + selection.slice(1)}</h3>
      </div>
      {cards}
      <Link to="/" ><button className='back-btn'>Back</button></Link>
      <button className='logout' onClick={logout}>Logout</button>
    </div>
  )
}

export default connect(mapStateToProps)(Recommendation);
