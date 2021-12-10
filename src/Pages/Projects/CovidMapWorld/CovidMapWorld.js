import React from 'react';
import Breadcrumbs from "../../../Components/Breadcrumbs";

const CovidMapWorld = () => {
    return (
        <>
            <Breadcrumbs
                tabInfo={[
                    ["Projects", "/projects"],
                    ["COVID-19 World Map", "active"],
                ]}
            />
        </>
    );
};

export default CovidMapWorld;
