import React from 'react'
import Header from './components/Header';
import {  useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackData from './data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';
// import RatingSelect from './components/RatingSelect';
import { context } from './context/FeedbackContext';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {

	const [ feedback, setFeedback ] = useState(FeedbackData);



	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		// console.log(newFeedback, 'newFeedback');
		setFeedback([...feedback, newFeedback]);
	}
	return (
		<FeedbackProvider >
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
					// feedback={feedback}
					// handleDelete={deleteFeedback}
				/>
			</div>
			</FeedbackProvider >
	);
}


export default App