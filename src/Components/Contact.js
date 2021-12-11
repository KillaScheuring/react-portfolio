import React from 'react';
import {NavItem} from "./Nav/NavComponents";
import ItemWithHeader from "./ItemWithHeader";

export const Footer = ({children}) => {
    return (
        <footer className={"footer has-background-dark"} style={{
            width: "100%",
            position: "relative",
            height: '10vh',
            marginTop: '-10vh',
            padding: 0
        }}>
            {children}
        </footer>
    )
}

const Contact = () => {
    return (
        <div
            className={"columns has-text-white"}
            align={"center"}
            style={{
                marginLeft: "15vw",
                marginRight: "15vw",
                width: "80vw",
                height: '5vh'
            }}
        >
            <div className={"column"}>
                <NavItem title={<ItemWithHeader className={"has-text-white"} title={"Email"} text={"killashandra@sylvia.com"}/>}/>
            </div>
            <div className={"column"}>
                <NavItem title={<ItemWithHeader className={"has-text-white"} title={"LinkedIn"} text={"Killashandra Scheuring"}/>}/>
            </div>
            <div className={"column"}>
                <NavItem title={<ItemWithHeader className={"has-text-white"} title={"Location"} text={"Kansas City Metro Area"}/>}/>
            </div>
        </div>
    )
}

export default Contact;
