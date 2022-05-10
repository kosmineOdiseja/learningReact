import React from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'

const FeedbackStats = ( ) => {

	const { feedback } = useContext(FeedbackContext)
	
// calculate the average rating 
	const total = feedback.reduce( ( sum, item ) => sum + item.rating, 0 )
	const average = (total / feedback.length).toFixed(1).replace(/\.0$/, '')

	console.log(feedback, 'feedback');
	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} reviews </h4>
			<h4>Average Rating { isNaN(average) ? 0 : average  } </h4>
		</div>
	)
}

export default FeedbackStats