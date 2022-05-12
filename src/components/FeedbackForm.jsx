import React, { useContext, useState, useEffect } from 'react'
import Card  from '../components/shared/Card.jsx';
import Button from '../components/shared/Button.jsx';
import RatingSelect from './RatingSelect.jsx';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {

	const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)
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
		
		useEffect(() => {
			if (feedbackEdit.edit === true) {
				setBtnDisabled(false)
				setRating(feedbackEdit.item.rating)
				setText(feedbackEdit.item.text)
			}
	// [] empty array mean that this function will only run once at the start of the component/page/app
		}, [feedbackEdit])

const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
    //   if (feedbackEdit.edit === true) {
      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      // NOTE: reset to default state after submission
      setBtnDisabled(true) // 👈  add this line to reset disabled
      setRating(10) //👈 add this line to set rating back to 10
      setText('')
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