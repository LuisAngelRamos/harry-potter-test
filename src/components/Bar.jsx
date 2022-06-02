import React, { useState } from 'react'
import propTypes from 'prop-types'
import '../styles/components/Bar.scss'
// <i class="fa-regular fa-bookmark fa-lg"></i>
const Bar = ({ showModal, setShowModal }) => {
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
					<div className='bar-favorite'>
						<div className='bar-favorite-info'>
							<img
								src='http://hp-api.herokuapp.com/images/harry.jpg'
								alt='harry'
							/>
							<span>Harry Potter</span>
						</div>
						<div className='bar-favorite-trash'>
							<i className='fa-solid fa-trash-can fa-lg'></i>
						</div>
					</div>
					<div className='bar-favorite'>
						<div className='bar-favorite-info'>
							<img
								src='http://hp-api.herokuapp.com/images/harry.jpg'
								alt='harry'
							/>
							<span>Harry Potter</span>
						</div>
						<div className='bar-favorite-trash'>
							<i className='fa-solid fa-trash-can fa-lg'></i>
						</div>
					</div>
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
