import React from 'react'
import Header from './components/Header';
// import {  useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
// import FeedbackData from './data/FeedbackData';

// import RatingSelect from './components/RatingSelect';
// import { context } from './context/FeedbackContext';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {

	// const [ feedback, setFeedback ] = useState(FeedbackData);




	return (
		<FeedbackProvider >
		{/* we can call 'text' as we want */}
		{ /* we can use dynamic props, but we need to remove: 'text="Hello World* and use only <Header/> */}
			<Header /> 
			<div className='container'>
				{/* <RatingSelect/>  */}
				<FeedbackForm />
				<FeedbackStats
					// feedback={feedback}
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