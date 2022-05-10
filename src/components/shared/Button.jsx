import React from 'react'
import PropTypes from 'prop-types'
// import propTypes from ''

const Button = ({children, version, type, isDisabled }) => {
	console.log(type, 'type');

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

Button.propTypes = {
	children: PropTypes.node.isRequired,
	version: PropTypes.string,
	type: PropTypes.string,
	isDisabled: PropTypes.bool
} 


export default Button