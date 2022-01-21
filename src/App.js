import React from 'react'
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

function App() {
	return (
		<>
		{/* we can call 'text' as we want */}
		{ /* we can use dynamic props, but we need to remove: 'text="Hello World* and use only <Header/> */}
		 <Header /> 
		 <div>
			 <FeedbackItem />
		 </div>
		</>
	);
}

export default App;