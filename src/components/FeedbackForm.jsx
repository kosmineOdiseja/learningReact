import React, { useContext } from 'react'
import Card  from '../components/shared/Card.jsx';
import Button from '../components/shared/Button.jsx';
import RatingSelect from './RatingSelect.jsx';
import FeedbackContext from '../context/FeedbackContext';



const FeedbackForm = () => {

	const { 
		 message, 
		 text,
		 handleTextChange,
		 handleSubmit,
		 setRating,
		 btnDisabled } = useContext(FeedbackContext);
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