import { createContext, useState } from "react"

const FeedbackContext = createContext()

 export const FeedbackProvider = ({ children }) => {

	const [ feedback, setFeedback ] = useState([
		{
			"id": 1,
			"rating": 10,
			"text": "lorum ipsum dolor sit amet 1 ",
		},
		{
			"id": 2,
			"rating": 8,
			"text": "lorum ipsum dolor sit amet 2",
		},
		{
			"id": 3,
			"rating": 6,
			"text": "lorum ipsum dolor sit amet 3",
		}
	])
	const deleteFeedback = (id) => {
		if(window.confirm('Are you sure you want to delete this feedback?')) {
		setFeedback(feedback.filter((item) => item.id !== id));
	}
	}
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				deleteFeedback, 
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext 