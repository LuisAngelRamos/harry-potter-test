import React from 'react'
import propTypes from 'prop-types'

const Button = ({ title }) => {
	return <button>{title}</button>
}

export default Button
Button.propTypes = {
	title: propTypes.string,
}
