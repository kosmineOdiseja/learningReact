import React, { useState } from 'react'
import Card  from '../components/shared/Card.jsx';
import Button from '../components/shared/Button.jsx';
import RatingSelect from './RatingSelect.jsx';


const FeedbackForm = ({ handleAdd }) => {
	  const [text, setText] = useState('');
	  const [rating, setRating] = useState(10);
	  const [btnDisabled, setBtnDisabled ] = useState(true);
	  const [message, setMessage ] = useState('');

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
			handleAdd(newFeedback)
			// console.log(newFeedback, 'newFeedback')
			// how to clear the text field? 
			setText('')
		} 
	 }
  return (
		<Card>
			<form onSubmit={handleSubmit}> 
				<h2> How would yuo rate your experience? </h2>
				{/*  @todo - rating select component  */}
				<RatingSelect select={(rating) => setRating(rating) }/>
				
				<div className="input-group">
					<input
						onChange={ handleTextChange }
						type='text'
						placeholder='Write a review'
						value={text}
					/>
					 
					<Button type='submit' isDisabled={btnDisabled} > Send </Button>
				</div>
				{ message && <div className='message'> { message } </div>}
			</form>
		</Card>

  )
}

export default FeedbackForm