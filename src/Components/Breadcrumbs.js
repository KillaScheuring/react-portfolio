import React from 'react';
import {Link} from "react-router-dom";

const Breadcrumbs = ({tabInfo}) => (
    <nav className={"breadcrumb has-background-light p-2"} aria-label={"breadcrumbs"}>
        <ul>
            {tabInfo.map(tab => tab[1] === "active" ? (
                <li className={"is-active"}>
                    <a className={"has-text-primary"} href="#" aria-current="page">{tab[0]}</a>
                </li>
            ) : (
                <li>
                    <Link className={"has-text-black"} to={tab[1]}>
                        {tab[0]}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
)

export default Breadcrumbs;
