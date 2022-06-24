import React from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import '../../styles/components/Bar.scss'
import Favorite from './Favorite'

class Bar extends React.Component {
    constructor () {
        super()
        this.state = { showFavorites: false }
    }

    render() {
        const favorites = this.props.favorites?.favorites
        return (
            <div className='bar'>
                <div className='bar-buttons'>
                    <button
                        className={`bar-button ${
                            this.state.showFavorites ? 'bar-button__favorites' : ''
                        }`}
                        onClick={() => this.setState({showFavorites: !this.state.showFavorites})}
                    >
                        Favoritos<i className='fa-solid fa-bookmark fa-lg'></i>
                    </button>
                    <button
                        className={`bar-button ${
                            this.state.showFavorites ? 'bar-button__favorites' : ''
                        }`}
                        onClick={() => this.props.setShowModal(!this.props.showModal)}
                    >
                        Agregar<i className='fa-solid fa-user-plus fa-lg'></i>
                    </button>
                </div>
                {this.state.showFavorites && (
                    <div className='bar-favorites'>
                        {favorites[0] ? (
                            favorites?.map((favorite, index) => (
                                <Favorite favorite={favorite} key={index} />
                            ))
                        ) : (
                            <div className='bar-favorite'>
                                <div className='bar-favorite-info'>
                                    <span>Agrega tus favoritos</span>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateToProps)(Bar)
Bar.propTypes = {
	showModal: propTypes.bool,
	setShowModal: propTypes.func,
    favorites: propTypes.array
}
