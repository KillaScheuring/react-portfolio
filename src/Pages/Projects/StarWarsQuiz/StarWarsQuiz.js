import React from 'react';
import Breadcrumbs from "../../../Components/Breadcrumbs";

const StarWarsQuiz = () => {
    return (
        <>
            <Breadcrumbs
                tabInfo={[
                    ["Projects", "/projects"],
                    ["Star Wars Quiz", "active"],
                ]}
            />
        </>
    );
};

export default StarWarsQuiz;
