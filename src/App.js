import React from 'react'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import { FeedbackProvider } from './context/FeedbackContext';

function App() {

	return (
		<FeedbackProvider >
		{/* we can call 'text' as we want */}
		{ /* we can use dynamic props, but we need to remove: 'text="Hello World* and use only <Header/> */}
			<Header /> 
			<div className='container'>
				<FeedbackForm />
				<FeedbackStats
				/>
				<FeedbackList
				/>
			</div>
			</FeedbackProvider >
	);
}


export default App