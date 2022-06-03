import React from 'react'
import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteFavorite } from '../../reducer/favoritesSlice'

const Favorite = ({ favorite }) => {
	const dispatch = useDispatch()

	return (
		<div className='bar-favorite'>
			<div className='bar-favorite-info'>
				<img
					src={favorite.image}
					alt={favorite.name?.split(' ').join('')}
				/>
				<span>{favorite.name}</span>
			</div>
			<div className='bar-favorite-trash'>
				<i
					className='fa-solid fa-trash-can fa-lg'
					onClick={() => dispatch(deleteFavorite(favorite.name))}
				></i>
			</div>
		</div>
	)
}

export default Favorite
Favorite.propTypes = {
	favorite: propTypes.object,
}
