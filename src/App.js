import React from 'react'
import Header from './components/Header';
import {  useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackData from './data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';
// import RatingSelect from './components/RatingSelect';

function App() {

	const [ feedback, setFeedback ] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if(window.confirm('Are you sure you want to delete this feedback?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	}

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		// console.log(newFeedback, 'newFeedback');
		setFeedback([...feedback, newFeedback]);
	}
	return (
		<>
		{/* we can call 'text' as we want */}
		{ /* we can use dynamic props, but we need to remove: 'text="Hello World* and use only <Header/> */}
			<Header /> 
			<div className='container'>
				{/* <RatingSelect/>  */}
				<FeedbackForm handleAdd={addFeedback}/>
				<FeedbackStats
					feedback={feedback}
				/>
				<FeedbackList
					feedback={feedback}
					handleDelete={deleteFeedback}
				/>
			</div>
		</>
	);
}


export default App