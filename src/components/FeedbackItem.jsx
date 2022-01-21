import React from 'react';
import { useState } from 'react';

function FeedbackItem({ item } ) {
 // setting peace of state 
 // [ destructuring the array here of what the fucktion returns ]
 // [ first value is name of the state, second value is the function to update the state ]

  return (
	  <Card className='card'>	
		<div className="num-display">{item.rating}</div>
		<div className="text-display">{item.text}</div>
	  </Card>
	  
  )
}

export default FeedbackItem;
