import React from 'react'
import '../styles/components/Card.scss'

const Card = () => {
	return (
		<div className='card'>
			<div className='card-photo'>
				<img
					src='http://hp-api.herokuapp.com/images/harry.jpg'
					alt='harry'
				/>
			</div>
			<div className='info'>
				<div className='info-status'>
					<label>VIVO / ESTUDIANTE</label>
					<i className='fa-regular fa-bookmark fa-lg'></i>
				</div>
				<div className='info-name'>
					<span>Harry Potter</span>
				</div>
				<div className='info-label'>
					<label>
						<span>Cumpleaños:</span> 31-07-1980
					</label>
					<label>
						<span>Género:</span> Male
					</label>
					<label>
						<span>Color de ojos:</span> Green
					</label>
					<label>
						<span>Color de pelo:</span> Black
					</label>
				</div>
			</div>
		</div>
	)
}

export default Card
