import React from 'react'
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import Card from '../../components/Cards/Card'
import Bar from '../../components/Bar/Bar'
import characterMock from '../../__mocks__/characterMock'
import { Provider } from 'react-redux'
import store from '../../store/store'

describe('Agregar a favoritos un personaje', () => {
	act(() => {
		render(
			<Provider store={store}>
				<Bar />
				<Card character={characterMock} />
			</Provider>
		)
	})

	const btnIncrement = screen.getByTestId('save-favorite')
	test('Click al boton de guardado', () => {
		btnIncrement.click()
		expect(btnIncrement).not.toBeNull()
	})
	test('Comprobar store favoritos', () => {
		expect(store.getState().favorites.favorites).toStrictEqual([
			characterMock,
		])
	})
})
