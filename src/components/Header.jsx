import PropTypes from 'prop-types'
import React from 'react'

//  we can use ( props ) 
// but we can use destructuring with curly braces { text }
const Header = ({ text }) => {
	const headerStyles= {
		backgroundColor: '#444',
		color: 'white',
	}	

	return (
		<header style={ headerStyles }> 
			<div className='container'>
				<h2>
					{text} { /* we can use like this */ }
					{/* and camment this { props.text} */}
				</h2>
			</div>
		</header>	
	)
}

Header.defaultProps = {
	text: 'Feedback UI',
}
// checking the type of the props like this
Header.PropType = {
	text: PropTypes.string,
	// text: PropTypes.string.isRequired
	// this is the same as the line above but with isRequired property, which mean that the prop is required
}

export default Header
