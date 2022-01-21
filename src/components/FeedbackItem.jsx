import React from 'react';
import { useState } from 'react';

function FeedbackItem() {
 // setting peace of state 
 // [ destructuring the array here of what the fucktion returns ]
 // [ first value is name of the state, second value is the function to update the state ]
 const [rating, setRating] = useState(8);
const [ comment, setComment ] = useState('This is comment for the feedback using state hook');
const handleClick = () => {
	setRating((prev) => {
		return 1 + prev;
	});
}
  return (
	  <div className='card'>	
		<div className="num-display">{rating}</div>
		<div className="text-display">{comment}</div>
		<button onClick={handleClick}> click </button>	
	  </div>
	  
  )
}

export default FeedbackItem;
