import React, { useState } from 'react'
import propTypes from 'prop-types'
import Inputs from './Inputs'
import Radios from './Radios'
import { useDispatch } from 'react-redux'
import { post } from '../../reducer/charactersSlice'
import '../../styles/components/Modal.scss'

const Modal = ({ showModal, setShowModal }) => {
	const dispatch = useDispatch()
	const [stateForm, setSateForm] = useState(false)
	const [fileUrl, setFileUrl] = useState(null)
	const [state, setState] = useState({
		name: '',
		dateOfBirth: '',
		eyeColour: '',
		hairColour: '',
		gender: 'female',
		position: 'student',
		image: '',
	})

	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

	const processImage = event => {
		if (event.target.files[0]) {
			const imageFile = event.target.files[0]
				? event.target.files[0]
				: null
			const imageUrl = URL.createObjectURL(imageFile)
			setFileUrl(imageUrl)
			setState({ ...state, image: imageUrl })
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		const values = Object.values(state)
		let shouldSkip = false
		values.forEach(value => {
			if (shouldSkip) {
				return
			}
			if (!value) {
				window.alert(`Falta algun campo del formulario`)
				setSateForm(true)
				shouldSkip = true
				return null
			}
			return null
		})

		if (shouldSkip) {
			return
		}

		dispatch(post(state))
		setShowModal(!showModal)
	}
	return (
		<div className='modal'>
			<form>
				<div className='modal-header'>
					<label>Agregar un personaje</label>
					<div className='modal-close'>
						<i
							className='fa-solid fa-xmark fa-lg'
							onClick={() => setShowModal(!showModal)}
						></i>
					</div>
				</div>
				<div className='modal-inputs-group'>
					<div className='modal-inputs'>
						<Inputs
							title='Nombre'
							name='name'
							value={state.name}
							stateForm={stateForm}
							handleChange={handleChange}
						/>
						<Inputs
							title='Cumpleaños'
							name='dateOfBirth'
							value={state.dateOfBirth}
							stateForm={stateForm}
							handleChange={handleChange}
						/>
					</div>
					<div className='modal-inputs'>
						<Inputs
							title='Color de ojos'
							name='eyeColour'
							value={state.eyeColour}
							stateForm={stateForm}
							handleChange={handleChange}
						/>
						<Inputs
							title='Color de pelo'
							name='hairColour'
							value={state.hairColour}
							stateForm={stateForm}
							handleChange={handleChange}
						/>
					</div>
				</div>
				<div className='modal-radios-group'>
					<div className='modal-radios'>
						<div>
							<label>Genero</label>
						</div>
						<div className='modal-radio-row'>
							<Radios
								name='gender'
								id='female'
								handleChange={handleChange}
								title='Mujer'
								state={state.gender}
							/>
							<Radios
								name='gender'
								id='male'
								handleChange={handleChange}
								title='Hombre'
								state={state.gender}
							/>
						</div>
					</div>
					<div className='modal-radios'>
						<div>
							<label>Posición</label>
						</div>
						<div className='modal-radio-row'>
							<Radios
								name='position'
								id='student'
								handleChange={handleChange}
								title='Estudiante'
								state={state.position}
							/>
							<Radios
								name='position'
								id='staff'
								handleChange={handleChange}
								title='Staff'
								state={state.position}
							/>
						</div>
					</div>
				</div>
				<div className='modal-file'>
					<input
						type='file'
						name='image'
						accept='image/png, image/jpeg'
						onChange={processImage}
					/>
					{fileUrl && <img src={fileUrl} className='modal-img' />}
				</div>
				<div className='modal-submit'>
					<button
						className='button-filter'
						onClick={e => {
							handleSubmit(e)
						}}
					>
						Guardar
					</button>
				</div>
			</form>
		</div>
	)
}

export default Modal
Modal.propTypes = {
	showModal: propTypes.bool,
	setShowModal: propTypes.func,
}
