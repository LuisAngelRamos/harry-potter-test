import React, { useState } from 'react'

import Button from '../components/Button'
import Bar from '../components/Bar'
import Cards from '../components/Cards'
import Modal from '../components/Modal'
import Logo from '../logo/Logo'

import '../styles/containers/App.scss'

function App() {
	const [showModal, setShowModal] = useState(false)

	return (
		<div className='home'>
			<div className='home-logo'>
				<Logo />
			</div>
			<div className='home-title'>
				<h1>Selecciona tu filtro</h1>
			</div>
			<div className='home-bar'>
				<Bar showModal={showModal} setShowModal={setShowModal} />
			</div>
			<div className='home-filters'>
				<Button title='Estudiantes' />
				<Button title='Staff' />
			</div>
			<div className='home-cards'>
				<Cards />
			</div>
			{showModal && <Modal />}
		</div>
	)
}

export default App
