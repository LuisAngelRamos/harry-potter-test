import React from 'react'
import propTypes from 'prop-types'
import '../styles/components/Buttons.scss'

const Button = ({ title }) => {
	return <button className='button-filter'>{title}</button>
}

export default Button
Button.propTypes = {
	title: propTypes.string,
}
