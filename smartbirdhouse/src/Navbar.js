import React from 'react';
import {Nav, NavLink, Bars, NavMenu} from './NavElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to='/historia'>Historia</NavLink>
                    <NavLink to='/esittely'>Esittely</NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar