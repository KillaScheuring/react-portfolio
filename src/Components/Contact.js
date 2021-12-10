import React from 'react';
import {NavItem} from "./Nav/NavComponents";
import ItemWithHeader from "./ItemWithHeader";

export const Footer = ({children}) => {
    return (
        <footer className={"footer"} style={{
            width: "100%",
            position: "absolute",
            bottom: "0px",
            left: "0px",
            textAlign: "center",
            padding: 0
        }}>
            {children}
        </footer>
    )
}

const Contact = () => {
    return (
        <div className={"columns"} align={"center"} style={{marginLeft: "15vw", marginRight: "15vw", width: "80vw"}}>
            <div className={"column"}>
                <NavItem title={<ItemWithHeader title={"Email"} text={"killashandra@sylvia.com"}/>}/>
            </div>
            <div className={"column"}>
                <NavItem title={<ItemWithHeader title={"LinkedIn"} text={"Killashandra Scheuring"}/>}/>
            </div>
            <div className={"column"}>
                <NavItem title={<ItemWithHeader title={"Location"} text={"Kansas City Metro Area"}/>}/>
            </div>
        </div>
    )
}

export default Contact;
