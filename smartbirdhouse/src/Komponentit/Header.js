import React from 'react'
import logo from '../birdhouse.png'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <div>
            <h1>Älykäs Linnunpönttö</h1>
            <p>Seuraa lintujen elämää internetissä</p>
            </div>
            <img src={logo}/>
        </div>
    )
}

export default Header