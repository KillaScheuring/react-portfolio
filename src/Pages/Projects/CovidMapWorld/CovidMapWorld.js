import React, {useEffect} from 'react';
import Breadcrumbs from "../../../Components/Breadcrumbs";

const CovidMapWorld = () => {
    useEffect(() => {
        document.title = "Projects - COVID-19 World Map"
    }, [])
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
