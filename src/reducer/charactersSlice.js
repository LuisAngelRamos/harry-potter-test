import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { characters } from '../moks/hp-characters'
import { staff } from '../moks/hp-staff'
import { students } from '../moks/hp-students'

export const post = createAsyncThunk(
	'/characters',
	async (dataPost, { rejectWithValue }) => {
		try {
			console.log(dataPost)
			const character = dataPost
			if (character.position === 'student') {
				character.hogwartsStudent = true
				character.hogwartsStaff = false
			} else {
				character.hogwartsStudent = false
				character.hogwartsStaff = true
			}
			try {
				delete character.position
			} catch (err) {
				console.log(err)
			}

			character.species = ''
			character.house = ''
			character.yearOfBirth = 0
			character.wand = {}
			character.patronus = ''
			character.actor = ''
			character.alive = true
			await fetch('http://localhost:3000/characters', {
				method: 'POST',
				body: JSON.stringify(dataPost),
				headers: { 'Content-Type': 'application/json' },
			})

			return character
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)

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
		postCharacter: async (state, action) => {
			const character = action.payload
			if (character.position === 'student') {
				character.hogwartsStudent = true
				character.hogwartsStaff = false
			} else {
				character.hogwartsStudent = false
				character.hogwartsStaff = true
			}
			try {
				delete character.position
			} catch (err) {
				console.log(err)
			}

			character.species = ''
			character.house = ''
			character.dateOfBirth = '31-07-1980'
			character.yearOfBirth = 0
			character.wand = {}
			character.patronus = ''
			character.actor = ''
			character.alive = true

			post(character)

			state.characters.push(action.payload)
		},
	},
	extraReducers: {
		[post.pending]: (state, action) => {
			state.isLoading = true
			state.isAuthenticated = false
		},
		[post.fulfilled]: (state, action) => {
			state.isLoading = false
			state.isAuthenticated = true
			state.characters.push(action.payload)
		},
		[post.rejected]: (state, action) => {
			state.isLoading = false
			state.isAuthenticated = false
			state.characters = characters
			state.error = action.payload.message
		},
	},
})

export const { getStaff, getStudents, postCharacter } = charactersSlice.actions

export default charactersSlice.reducer
