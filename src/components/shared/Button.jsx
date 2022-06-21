import React, { useContext } from 'react'
import FeedbackContext from '../../context/FeedbackContext';
import proptypes from 'prop-types';

const Button = ({children, type, isDisabled, version   }) => {

  return (
	<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
		{children}
	</button>
  )
}


Button.defaultProps = {
	version: 'primary',
	type: 'button',
	isDisabled: false
}

// Button.propTypes = {
// 	children: PropTypes.node.isRequired,
// 	version: PropTypes.string,
// 	type: PropTypes.string,
// 	isDisabled: PropTypes.bool
// } 

export default Button