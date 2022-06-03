import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from '../reducer/charactersSlice'
import favoritesReducer from '../reducer/favoritesSlice'

export default configureStore({
	reducer: {
		characters: charactersReducer,
		favorites: favoritesReducer,
	},
})
