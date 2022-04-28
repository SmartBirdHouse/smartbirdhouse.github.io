import React from 'react';
import {  Link } from "react-router-dom";

//Navigaatiopalkki sisältää link-elementit, jotka ohjaavat 
//oikeisiin osoitteisiin

const Navbar = () => {
    return (
        <div className='navigaatio'>
            <li>
                <Link to="/" className='linkki'>Etusivu</Link>
            </li>
            <li>
                <Link to="/esittely" className='linkki'>Esittely</Link>
            </li>
        </div>
    )
}

export default Navbar