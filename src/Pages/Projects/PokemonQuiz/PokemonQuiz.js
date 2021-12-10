import React from 'react';
import Breadcrumbs from "../../../Components/Breadcrumbs";

const PokemonQuiz = () => {
    return (
        <>
            <Breadcrumbs
                tabInfo={[
                    ["Projects", "/projects"],
                    ["Pokemon Quiz", "active"]
                ]}
            />
        </>
    );
};

export default PokemonQuiz;
