import React from 'react'
import './Header.css'

//Komponentti renderöi otsikkopalkin

const Header = () => {
    return (
        <div className='Header'>
            <div>
            <h1>Älykäs Linnunpönttö</h1>
            <p>Seuraa lintujen elämää internetissä</p>
            </div>
        </div>
    )
}

export default Header