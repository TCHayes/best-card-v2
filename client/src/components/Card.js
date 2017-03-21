import React from 'react';

export default function Card (props) {

  //temp styling just to make individual cards easy to see
  const divStyle = {
    border: '1px solid black',
    borderradius: '5px'
  }

  return (
    <div id='card-recommendation' style={divStyle}>
      <h2>{props.name}</h2>
      <br></br>
      <h3>{`${props.percent * 100}% Back`}</h3>
    </div>
  )
}
