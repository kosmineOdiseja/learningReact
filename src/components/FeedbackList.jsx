import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext'; 

function FeedbackList() {

	const {feedback}  = useContext(FeedbackContext);
	// checking if the feedback is empty or we get the feedback
	if (!feedback || feedback.length === 0 ) {
		return <p> No FeedBack </p> 
	}
	return ( <div className='feedback-list'>
		<AnimatePresence>
		{feedback.map(( item ) => (
			<motion.div
			key={item.id}
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			>
			
				<FeedbackItem 
					key={item.id}
					item={item}
					// handleDelete={handleDelete}
				/> 
			</motion.div>
		))}
		</AnimatePresence>
	 </div> )
}

export default FeedbackList;
