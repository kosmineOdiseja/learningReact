import {FaTimes} from 'react-icons/fa'
import React from 'react';
import Card from '../components/shared/Card.jsx';

function FeedbackItem({ item }) {
 // setting peace of state 
 // [ destructuring the array here of what the function returns ]
 // [ first value is name of the state, second value is the function to update the state ]

// Secont approach to set value of state 
 const handleClick = () => {
	 console.log(item.id)
 }
  return (
	  <Card>	
		<div className="num-display">{item.rating}</div>
 {/* item.id is the unique id of the feedback item which we can see in the console by clicking the feedback item */}
		<button onClick={handleClick} className="close">
			<FaTimes color="purple" />
		</button>
		<div className="text-display">{item.text}</div>
	  </Card>
	  
  )
}

export default FeedbackItem;
