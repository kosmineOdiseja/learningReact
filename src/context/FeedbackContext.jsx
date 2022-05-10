import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

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

	  const [text, setText] = useState('');
	  const [rating, setRating] = useState(10);
	  const [btnDisabled, setBtnDisabled ] = useState(true);
	  const [message, setMessage ] = useState('');

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
	

	const handleTextChange = (e) => {
		  if (text === '') {
			  setBtnDisabled(true);
			  setMessage(null)
		  } else if (text !== '' && text.trim().length <= 10 ) {
			  setMessage('Text must be at least 10 characters Long!')
			  setBtnDisabled(true)
		  } else {
			  setMessage(null)
			  setBtnDisabled(false)
		  }
		setText(e.target.value)
	  }

	  const handleSubmit = (e) => {
		e.preventDefault()
		if(text.trim().length > 10 ) {
			const newFeedback = {
				text, rating
			}
			addFeedback(newFeedback)
			// console.log(newFeedback, 'newFeedback')
			// how to clear the text field? 
			setText('')
		} 
	 }
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				message,
				btnDisabled,
				text,
				rating,
				setRating,
				deleteFeedback, 
				addFeedback, 
				setBtnDisabled,
				handleSubmit,
				handleTextChange,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext 