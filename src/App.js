import React from 'react'
import Header from './components/Header';

function App() {
	return (
		<>
		{/* we can call 'text' as we want */}
		{ /* we can use dynamic props, but we need to remove: 'text="Hello World* and use only <Header/> */}
		 <Header  /> 
		 <div>
			<h1> My App </h1>
		 </div>
		</>
	);
}

export default App;