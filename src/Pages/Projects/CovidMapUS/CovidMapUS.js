import React from 'react';
import Breadcrumbs from "../../../Components/Breadcrumbs";

const CovidMapUs = () => {
    return (
        <>
            <Breadcrumbs
                tabInfo={[
                    ["Projects", "/projects"],
                    ["COVID-19 US Map", "active"],
                ]}
            />
        </>
    );
};

export default CovidMapUs;
