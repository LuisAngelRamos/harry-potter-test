import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getStaff, getStudents } from '../../reducer/charactersSlice'
import Button from './Button'

const Buttons = () => {
	const dispatch = useDispatch()
	const [filter, setFilter] = useState('')

	useEffect(() => {
		if (filter === 'Estudiantes') {
			dispatch(getStudents())
		} else if (filter === 'Staff') {
			dispatch(getStaff())
		}
	}, [filter])
	return (
		<>
			<Button title='Estudiantes' filter={filter} setFilter={setFilter} />
			<Button title='Staff' filter={filter} setFilter={setFilter} />
		</>
	)
}

export default Buttons
