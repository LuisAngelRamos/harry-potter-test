import React from 'react'
import Button from '../components/Button'
import '../styles/containers/App.scss'

function App() {
	return (
		<div className='Home'>
			<div className='Home-filters'>
				<Button title='Estudiantes' />
				<Button title='Staff' />
			</div>
		</div>
	)
}

export default App
