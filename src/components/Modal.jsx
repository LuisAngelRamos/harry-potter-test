import React from 'react'
import '../styles/components/Modal.scss'

const Modal = () => {
	return (
		<div className='modal'>
			<div className='modal-header'>
				<label>Agregar un personaje</label>
				<div className='modal-close'>
					<i className='fa-solid fa-xmark fa-lg'></i>
				</div>
			</div>
			<div className='modal-inputs-group'>
				<div className='modal-inputs'>
					<div className='modal-input'>
						<label className='modal-label'>Nombre</label>
						<input type='text' />
					</div>
					<div className='modal-input'>
						<label className='modal-label'>Cumpleaños</label>
						<input type='text' />
					</div>
				</div>
				<div className='modal-inputs'>
					<div className='modal-input'>
						<label className='modal-label'>Color de ojos</label>
						<input type='text' />
					</div>
					<div className='modal-input'>
						<label className='modal-label'>Posición</label>
						<input type='text' />
					</div>
				</div>
			</div>
			<div className='modal-radios-group'>
				<div className='modal-radios'>
					<div className='modal-radio'>
						<input type='radio' id='female' name='gender' />
						<label className='modal-label' htmlFor='female'>
							Mujer
						</label>
					</div>
					<div className='modal-radio'>
						<input type='radio' id='male' name='gender' />
						<label className='modal-label' htmlFor='male'>
							Hombre
						</label>
					</div>
				</div>
				<div className='modal-radios'>
					<div className='modal-radio'>
						<input type='radio' id='student' name='position' />
						<label className='modal-label' htmlFor='student'>
							Estudiante
						</label>
					</div>
					<div className='modal-radio'>
						<input type='radio' id='staff' name='position' />
						<label className='modal-label' htmlFor='staff'>
							Staff
						</label>
					</div>
				</div>
			</div>
			<div>
				<input type='file' name='' id='' />
			</div>
			<div>button</div>
		</div>
	)
}

export default Modal
