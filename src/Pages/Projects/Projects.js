import React, {useEffect} from 'react';
import Breadcrumbs from "../../Components/Breadcrumbs";

const Projects = () => {
    useEffect(() => {
        document.title = "Portfolio - Projects"
    }, [])
    return (
        <>
            <Breadcrumbs
                tabInfo={[
                    ["Projects", "active"]
                ]}
            />
        </>
    );
};

export default Projects;
