import { useSelector } from 'react-redux'

import React from 'react'
import Card from './Card'

const Cards = () => {
	const characters = useSelector(state => state.characters.characters)

	return (
		<>
			{characters?.map((character, index) => (
				<Card character={character} key={index} />
			))}
		</>
	)
}

export default Cards
