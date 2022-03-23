import React from 'react'

const FeedbackStats = ( { feedback }) => {
  return (
	<div className='feedback-stats'>
		<h4>{feedback.length} reviews </h4>
		<h4>Average Rating</h4>
	</div>
  )
}

export default FeedbackStats