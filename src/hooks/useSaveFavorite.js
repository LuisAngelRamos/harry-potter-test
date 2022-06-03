import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, deleteFavorite } from '../reducer/favoritesSlice'

export const useSaveFavorite = character => {
	const characters = useSelector(state => state.characters.characters)
	const favorites = useSelector(state => state.favorites.favorites)

	const dispatch = useDispatch()
	const [state, setState] = useState(false)

	useEffect(() => {
		const favorite = favorites?.find(
			favorite => favorite.name === character.name
		)
		if (!favorite) {
			setState(false)
		}
	}, [favorites])

	useEffect(() => {
		const favorite = favorites?.find(
			favorite => favorite.name === character.name
		)
		if (!favorite) {
			setState(false)
		} else {
			setState(true)
		}
	}, [characters])

	const onClick = (character, stateChange) => {
		if (stateChange) {
			try {
				dispatch(addFavorite(character))
			} catch (err) {
				console.log(err)
				return
			}
		} else {
			dispatch(deleteFavorite(character.name))
		}
		setState(stateChange)
	}

	return { state, onClick }
}
