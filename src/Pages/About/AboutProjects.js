import React from 'react';
import Breadcrumbs from "../../Components/Breadcrumbs";

const AboutProjects = () => {
    return (
        <>
            <Breadcrumbs
                tabInfo={[
                    ["About", "/about"],
                    ["Projects", "active"],
                ]}
            />
        </>
    );
};

export default AboutProjects;
