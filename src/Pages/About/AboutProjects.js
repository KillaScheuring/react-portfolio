import React, {useEffect} from 'react';
import Breadcrumbs from "../../Components/Breadcrumbs";

const AboutProjects = () => {
    useEffect(() => {
        document.title = "About - Projects"
    }, [])
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
