import React from 'react'
import propTypes from 'prop-types'

const Inputs = ({ type, title, name, value, stateForm, handleChange }) => {
	return (
		<div className='modal-input'>
			<label className='modal-label'>{title}</label>
			<input
				type={type ?? 'text'}
				name={name}
				value={value}
				required={stateForm}
				onChange={e => handleChange(e)}
			/>
		</div>
	)
}

export default Inputs
Inputs.propTypes = {
	type: propTypes.string,
	name: propTypes.string,
	value: propTypes.string,
	stateForm: propTypes.bool,
	handleChange: propTypes.func,
	title: propTypes.string,
}
