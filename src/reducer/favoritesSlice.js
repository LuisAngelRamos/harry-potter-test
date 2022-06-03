import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
	name: 'favorites',
	initialState: {
		favorites: [],
	},
	reducers: {
		addFavorite: (state, action) => {
			if (state.favorites?.length < 5) {
				state.favorites.push(action.payload)
			} else {
				throw new Error('Favoritos Lleno')
			}
		},
		deleteFavorite: (state, action) => {
			const index = state.favorites?.findIndex(
				favorite => favorite.name === action.payload
			)

			state.favorites.splice(index, 1)
		},
	},
})

export const { addFavorite, deleteFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer
