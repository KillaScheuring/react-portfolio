import React, {useEffect} from 'react';
import Breadcrumbs from "../../../Components/Breadcrumbs";

const CovidMapUs = () => {
    useEffect(() => {
        document.title = "Projects - COVID-19 US Map"
    }, [])
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
