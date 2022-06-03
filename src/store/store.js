import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from '../reducer/charactersSlice'

export default configureStore({
	reducer: {
		characters: charactersReducer,
	},
})
