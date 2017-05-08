import React from 'react';
import '../../public/css/main.css';
import * as actions from '../actions';
import {connect} from 'react-redux';

export function Card (props) {
  const toggleCard = props.toggled ? 'card-toggled' : '';
  function toggler(){
    props.dispatch(actions.toggleCard(props.index));
  };

  return (
    <div className={`card ${toggleCard}`} onClick={toggler}>
      <div className='card-text'>
        {props.name}<br />
      </div>
    </div>
  )
}

export default connect()(Card);
