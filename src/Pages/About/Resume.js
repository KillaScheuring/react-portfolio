import React, {useEffect} from 'react';
import Breadcrumbs from "../../Components/Breadcrumbs";

const Resume = () => {
    useEffect(() => {
        document.title = "About - Resume"
    }, [])
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
