import React from 'react';
import Breadcrumbs from "../../../Components/Breadcrumbs";

const Platformer = () => {
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
