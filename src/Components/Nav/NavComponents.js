import React from 'react';
import {Link} from 'react-router-dom'

export const NavBrand = () => {
    return (
        <div className={"navbar-brand"}>
            <Link className={"navbar-item"} to={"/"}>
                <img src={"https://bulma.io/images/bulma-logo.png"} alt={"Logo"} width={112} height={28}/>
            </Link>
            <a role={"button"} className={"navbar-burger"}>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
    )
}

export const NavItem = ({title, to}) => {
    return (
        <Link className={"navbar-item"} to={to}>
            {title}
        </Link>
    )
}

export const NavDivider = () => <hr className="navbar-divider"/>

export const NavDropdown = ({title, to, children}) => {
    return (
        <div className="navbar-item has-dropdown is-hoverable">
            <Link className={"navbar-link"} to={to}>
                {title}
            </Link>
            <div className="navbar-dropdown">
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
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <NavBrand/>
            <div id="navbarBasicExample" className="navbar-menu">
                {children}
            </div>
        </nav>
    )
}
