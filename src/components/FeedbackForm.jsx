import React, { useContext, useState, useEffect } from 'react'
import Card  from '../components/shared/Card.jsx';
import Button from '../components/shared/Button.jsx';
import RatingSelect from './RatingSelect.jsx';
import FeedbackContext from '../context/FeedbackContext';



const FeedbackForm = () => {
	const { addFeedback, feedbackEdit } = useContext(FeedbackContext);
	
	  const [text, setText] = useState('');
	  const [rating, setRating] = useState(10);
	  const [btnDisabled, setBtnDisabled ] = useState(true);
	  const [message, setMessage ] = useState('');

	  console.log(text, 'this is text from feedback form after edit ');
	
	// [] empty array mean that this function will only run once at the start of the component/page/app

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
	useEffect(() => {
		if (feedbackEdit.edit === true) {

			setBtnDisabled(false)
			setRating(feedbackEdit.item.rating)
			console.log(feedbackEdit.item.rating, 'this is Item Rating VVVVVVVVVVVVVVVVVVVVVV ')
			setText(feedbackEdit.item.text)
			console.log(feedbackEdit.item.text, 'this is Item Text FFFFFFFFFFFFFFFFFFFFF ')
		}
	}, [feedbackEdit])


	const handleSubmit = (e) => {
		e.preventDefault()
		if(text.trim().length > 10 ) {
			const newFeedback = {
				text, rating
			}
			addFeedback(newFeedback)
			console.log(newFeedback, 'this is new feedback AAAAAAAAAAAAAAAAAAAAAAAA');
			// how to clear the text field? 
			setText('')
			console.log(text, 'this is text after submit CCCCCCCCCCCCCCCCCCCCCCCCCCC ');
		} 
	 }



  return (
		<Card>
			<form onSubmit={handleSubmit}> 
				<h2> How would yuo rate your experience? </h2>
				{/*  @todo - rating select component  */}
				<RatingSelect select={setRating} selected={rating}/>
				
				<div className="input-group">
					<input
						onChange={ handleTextChange }
						type='text'
						placeholder='Write a review'
						value={text}
					/>
					<Button type='submit' isDisabled={btnDisabled}  > Send </Button>
				</div>
				{ message && <div className='message'> { message } </div>}
			</form>
		</Card>

  )
}

export default FeedbackForm