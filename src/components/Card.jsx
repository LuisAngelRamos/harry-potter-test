import React from 'react'
import propTypes from 'prop-types'
import '../styles/components/Card.scss'

const Card = ({ character }) => {
	return (
		<div className='card'>
			<div
				className={`card-photo house-${
					character.house ? character.house : 'default'
				}`}
			>
				<img
					src={character.image}
					alt={character.name?.split(' ').join('')}
				/>
			</div>
			<div className={`info ${!character.alive && 'not-alive'}`}>
				<div className='info-status'>
					<label>
						{character.alive ? 'VIVO' : 'MUERTO'} /{' '}
						{character.hogwartsStudent
							? 'ESTUDIANTE'
							: character.hogwartsStaff
							? 'STAFF'
							: 'PERSONAJE'}
					</label>
					<i className='fa-regular fa-bookmark fa-lg'></i>
				</div>
				<div className='info-name'>
					<span>{character.name || '?'}</span>
				</div>
				<div className='info-label'>
					<label>
						<span>Cumpleaños: </span>
						{character.dateOfBirth
							? character.dateOfBirth
							: character.yearOfBirth
							? character.yearOfBirth
							: '?'}
					</label>
					<label>
						<span>Género: </span>
						{character.gender || '?'}
					</label>
					<label>
						<span>Color de ojos: </span>
						{character.eyeColour || '?'}
					</label>
					<label>
						<span>Color de pelo: </span>
						{character.hairColour || '?'}
					</label>
				</div>
			</div>
		</div>
	)
}

export default Card
Card.propTypes = {
	character: propTypes.object,
}
