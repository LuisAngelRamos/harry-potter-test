import React from 'react'
import '../styles/components/Bar.scss'
// <i class="fa-regular fa-bookmark"></i>
const Bar = () => {
	return (
		<div className='bar'>
			<button className='bar-button'>
				Favoritos<i className='fa-solid fa-bookmark fa-lg'></i>
			</button>
			<button className='bar-button'>
				Agregar<i className='fa-solid fa-user-plus fa-lg'></i>
			</button>
		</div>
	)
}

export default Bar
