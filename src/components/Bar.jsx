import React, { useState } from 'react'
import '../styles/components/Bar.scss'
// <i class="fa-regular fa-bookmark fa-lg"></i>
const Bar = () => {
	const [state, setState] = useState(false)
	return (
		<div className='bar'>
			<div className='bar-buttons'>
				<button
					className={`bar-button ${
						state ? 'bar-button__favorites' : ''
					}`}
					onClick={() => setState(!state)}
				>
					Favoritos<i className='fa-solid fa-bookmark fa-lg'></i>
				</button>
				<button
					className={`bar-button ${
						state ? 'bar-button__favorites' : ''
					}`}
				>
					Agregar<i className='fa-solid fa-user-plus fa-lg'></i>
				</button>
			</div>
			{state && (
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
