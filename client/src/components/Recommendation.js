import React from 'react';
//import {connect} from 'react-redux';
import Card from './Card';

export default function Recommendation (props) {
  //props.params will be defined by the variable route '/:selection'
  //const {selection} = props.params;

  //Hardcoded example below for testing
  const selection = 'restaurants';

  //Back button below will need to trigger event to reset selection to empty string
  // and render the category list component
  return (
    <div id='recommendation-container'>
      <div id='selection'>
        <h3>{selection.charAt(0).toUpperCase() + selection.slice(1)}</h3>
      </div>
      <Card selection={selection}/>
      <button className='back-btn'>Back</button>
    </div>
  )
}
