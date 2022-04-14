import React from 'react';
import {  Link } from "react-router-dom";
import {Nav, NavLink, Bars, NavMenu} from './NavElements.js';

const Navbar = () => {
    {/*return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to='/' activeStyle>Etusivu</NavLink>
                    <NavLink to='/historia' activeStyle>Historia</NavLink>
                    <NavLink to='/esittely' activeStyle>Esittely</NavLink>
                </NavMenu>
            </Nav>
        </>
    )*/}
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