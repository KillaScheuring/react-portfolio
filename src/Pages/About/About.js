import React, {useEffect} from 'react';
import Breadcrumbs from "../../Components/Breadcrumbs";

const About = () => {
    useEffect(() => {
        document.title = "Portfolio - About"
    }, [])
    return (
        <>
            <Breadcrumbs
                tabInfo={[
                    ["About", "active"]
                ]}
            />
        </>
    );
};

export default About;
