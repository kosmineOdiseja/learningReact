import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import feedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

 export const FeedbackProvider = ({ children }) => {

	const [ feedback, setFeedback ] = useState(feedbackData)
// setting edit 
// idea is to set the state of the feedback item to the object which handles the item and puts the editing item in the empty object 
// and then set the state of the feedback item to the empty object
// edit is a boolean which is set to treue when the user clicks the edit button

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,	
	})


	const deleteFeedback = (id) => {
		if(window.confirm('Are you sure you want to delete this feedback?')) {
		setFeedback(feedback.filter((item) => item.id !== id));
	}
	}
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([...feedback, newFeedback]);
	}
  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }
	
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback, 
				addFeedback,
				editFeedback, 
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext 