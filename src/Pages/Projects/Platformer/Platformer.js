import React, {useEffect} from 'react';
import Breadcrumbs from "../../../Components/Breadcrumbs";

const Platformer = () => {
    useEffect(() => {
        document.title = "Projects - Platformer"
    }, [])
    return (
        <>
            <Breadcrumbs
                tabInfo={[
                    ["Projects", "/projects"],
                    ["Platformer", "active"],
                ]}
            />
        </>
    );
};

export default Platformer;
