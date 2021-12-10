import React from 'react';
import Breadcrumbs from "../../Components/Breadcrumbs";

const About = () => {
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
