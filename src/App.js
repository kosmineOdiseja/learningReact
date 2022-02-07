import React from 'react'
import Header from './components/Header';
import {  useState } from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App() {
	const [ feedback, setFeedback ] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		console.log('App', id)
	}
	return (
		<>
		{/* we can call 'text' as we want */}
		{ /* we can use dynamic props, but we need to remove: 'text="Hello World* and use only <Header/> */}
		 <Header /> 
		 <div>
			 <FeedbackList feedback={feedback}
			 handleDelete={deleteFeedback}/>
		 </div>
		</>
	);
}

export default App;