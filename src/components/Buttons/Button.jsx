import React from 'react'
import propTypes from 'prop-types'
import '../../styles/components/Buttons.scss'

const Button = ({ title, filter, setFilter }) => {
	return (
		<button
			className={`button-filter ${
				filter === title && 'button-filter__active'
			}`}
			onClick={() => {
				setFilter(title)
			}}
		>
			{title}
		</button>
	)
}

export default Button
Button.propTypes = {
	title: propTypes.string,
	setFilter: propTypes.func,
	filter: propTypes.string,
}
