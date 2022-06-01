import React from 'react'
import Button from '../components/Button'
import Bar from '../components/Bar'
import Logo from '../logo/Logo'
import '../styles/containers/App.scss'

function App() {
	return (
		<div className='home'>
			<Logo />
			<div className='home-bar'>
				<Bar />
			</div>
			<div className='home-filters'>
				<Button title='Estudiantes' />
				<Button title='Staff' />
			</div>
		</div>
	)
}

export default App
