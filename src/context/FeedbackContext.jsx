import { createContext, useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
// import feedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

	const [ feedback, setFeedback ] = useState([])
	const [ isLoading, setIsLoading ] = useState(true)
// setting edit 
// idea is to set the state of the feedback item to the object which handles the item and puts the editing item in the empty object 
// and then set the state of the feedback item to the empty object
// edit is a boolean which is set to treue when the user clicks the edit button
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,	
	})
	
	useEffect(() => {
		fetchFeedback()
	}, [])

	const fetchFeedback = async () => {
		const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
		// const response = await fetch('http://localhost:5000/feedback')
		const data = await response.json()
		// console.log(data, 'this is the data from the fetch')
		setFeedback(data)
		setIsLoading(false)
		// console.log(data, 'data from the fetch');
	}

	const deleteFeedback = (id) => {
		if(window.confirm('Are you sure you want to delete this feedback?')) {
		setFeedback(feedback.filter((item) => item.id !== id));
		}
	}
	// update the data 

	const updateFeedback = (id, updItem ) => {
		console.log(id, updItem,  'this is id and updItem');
		setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem } : item))
		)
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
				isLoading,
				deleteFeedback, 
				addFeedback,
				editFeedback, 
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext 