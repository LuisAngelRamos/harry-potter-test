import React from 'react'
import propTypes from 'prop-types'

const Radios = ({ handleChange, name, id, title, state }) => {
	return (
		<div className='modal-radio'>
			<input
				type='radio'
				name={name}
				id={id}
				checked={state === id}
				value={id}
				onChange={handleChange}
			/>
			<label className='modal-label' htmlFor={id}>
				{title}
			</label>
		</div>
	)
}

export default Radios
Radios.propTypes = {
	name: propTypes.string,
	id: propTypes.string,
	handleChange: propTypes.func,
	title: propTypes.string,
	state: propTypes.string,
}
