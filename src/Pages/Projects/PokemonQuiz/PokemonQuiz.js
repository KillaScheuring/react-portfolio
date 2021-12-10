import React, {useEffect} from 'react';
import Breadcrumbs from "../../../Components/Breadcrumbs";

const PokemonQuiz = () => {
    useEffect(() => {
        document.title = "Projects - Pokemon Quiz"
    }, [])
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
