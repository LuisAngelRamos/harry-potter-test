import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import propTypes from 'prop-types'
import '../../styles/components/Bar.scss'
import Favorite from './Favorite'

const Bar = ({ showModal, setShowModal }) => {
	const favorites = useSelector(state => state.favorites.favorites)
	const [showFavorites, setShowFavorites] = useState(false)

	return (
		<div className='bar'>
			<div className='bar-buttons'>
				<button
					className={`bar-button ${
						showFavorites ? 'bar-button__favorites' : ''
					}`}
					onClick={() => setShowFavorites(!showFavorites)}
				>
					Favoritos<i className='fa-solid fa-bookmark fa-lg'></i>
				</button>
				<button
					className={`bar-button ${
						showFavorites ? 'bar-button__favorites' : ''
					}`}
					onClick={() => setShowModal(!showModal)}
				>
					Agregar<i className='fa-solid fa-user-plus fa-lg'></i>
				</button>
			</div>
			{showFavorites && (
				<div className='bar-favorites'>
					{favorites[0] ? (
						favorites?.map((favorite, index) => (
							<Favorite favorite={favorite} key={index} />
						))
					) : (
						<div className='bar-favorite'>
							<div className='bar-favorite-info'>
								<span>Agrega tus favoritos</span>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Bar
Bar.propTypes = {
	showModal: propTypes.bool,
	setShowModal: propTypes.func,
}
