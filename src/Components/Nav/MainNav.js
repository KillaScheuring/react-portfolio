import React from 'react';
import {NavBar, NavDivider, NavDropdown, NavItem, NavStart} from "./NavComponents";

const MainNav = () => {
    return (
        <NavBar>
            <NavStart>
                <NavItem to={"/"} title={"Home"}/>
                <NavDropdown to={"/about"} title={"About"}>
                    <NavItem to={"/about/me"} title={"Resume"}/>
                    <NavItem to={"/about/projects"} title={"Projects"}/>
                </NavDropdown>
                <NavDropdown to={"/projects"} title={"Projects"}>
                    <NavItem to={"/projects/platformer"} title={"Platformer"}/>
                    <NavDivider/>
                    <NavItem to={"/projects/pokemon"} title={"Pokemon Quiz"}/>
                    <NavItem to={"/projects/star-wars"} title={"Star Wars Quiz"}/>
                    <NavDivider/>
                    <NavItem to={"/projects/covid-us"} title={"COVID-19 US Map"}/>
                    <NavItem to={"/projects/covid-world"} title={"COVID-19 World Map"}/>
                </NavDropdown>
            </NavStart>
        </NavBar>
    );
};

export default MainNav;
