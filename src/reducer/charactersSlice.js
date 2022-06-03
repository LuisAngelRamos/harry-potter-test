import { createSlice } from '@reduxjs/toolkit'
import { characters } from '../moks/hp-characters'
import { staff } from '../moks/hp-staff'
import { students } from '../moks/hp-students'

export const charactersSlice = createSlice({
	name: 'characters',
	initialState: {
		characters,
	},
	reducers: {
		getStaff: state => {
			state.characters = staff
		},
		getStudents: state => {
			state.characters = students
		},
	},
})

export const { getStaff, getStudents } = charactersSlice.actions

export default charactersSlice.reducer
