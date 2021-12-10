import React from 'react';
import Breadcrumbs from "../../Components/Breadcrumbs";

const Resume = () => {
    return (
        <>
            <Breadcrumbs
                tabInfo={[
                    ["About", "/about"],
                    ["Resume", "active"],
                ]}
            />
        </>
    );
};

export default Resume;
