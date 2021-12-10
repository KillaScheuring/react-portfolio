import React from 'react';
import {Link} from 'react-router-dom'

export const NavItem = ({title, to}) => {
    if (to) return (
        <Link className={"navbar-item"} to={to}>
            {title}
        </Link>
    )
    return (
        <div className={"navbar-item"}>
            {title}
        </div>
    )
}

export const NavDivider = () => <hr className="navbar-divider"/>

export const NavDropdown = ({title, to, children}) => {
    return (
        <div className="navbar-item has-dropdown is-hoverable">
            <Link className={"navbar-link"} to={to}>
                {title}
            </Link>
            <div className="navbar-dropdown is-black">
                {children}
            </div>
        </div>
    )
}

export const NavStart = ({children}) => {
    return (
        <div className="navbar-start">
            {children}
        </div>
    )
}

export const NavEnd = ({children}) => {
    return (
        <div className="navbar-end">
            {children}
        </div>
    )
}

export const NavBar = ({children}) => {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" className="navbar-menu">
                {children}
            </div>
        </nav>
    )
}
