import {FaTimes} from 'react-icons/fa'
import React from 'react';
import Card from '../components/shared/Card.jsx';

function FeedbackItem({ item }) {
 // setting peace of state 
 // [ destructuring the array here of what the function returns ]
 // [ first value is name of the state, second value is the function to update the state ]

  return (
	  <Card>	
		<div className="num-display">{item.rating}</div>
		<div className="text-display">{item.text}</div>
	  </Card>
	  
  )
}

export default FeedbackItem;
