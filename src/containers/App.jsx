import React from 'react'
import Button from '../components/Button'
import Bar from '../components/Bar'
import Card from '../components/Card'
import Logo from '../logo/Logo'
import '../styles/containers/App.scss'

function App() {
	return (
		<div className='home'>
			<div className='home-logo'>
				<Logo />
			</div>
			<div className='home-bar'>
				<Bar />
			</div>
			<div className='home-filters'>
				<Button title='Estudiantes' />
				<Button title='Staff' />
			</div>
			<div className='home-cards'>
				<Card />
				<Card />
			</div>
		</div>
	)
}

export default App
