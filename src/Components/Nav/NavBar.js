import React from 'react';

const NavBar = ({children}) => {
    return (
        <nav style={{height: "6vh"}}>
            {children}
        </nav>
    );
};

export default NavBar;
