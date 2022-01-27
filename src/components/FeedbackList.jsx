import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
	// checking if the feedback is empty or we get the feedback
	if (!feedback || feedback.length === 0 ) {
		return <p> No FeedBack </p> 
	}
	return ( <div className='feedback-list'>
		{feedback.map(( item ) => (
			<FeedbackItem key={item.id} item={item}> {item.rating } </FeedbackItem>
		))}

	 </div> )
}

export default FeedbackList;
