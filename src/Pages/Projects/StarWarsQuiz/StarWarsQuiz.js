import React, {useEffect} from 'react';
import Breadcrumbs from "../../../Components/Breadcrumbs";

const StarWarsQuiz = () => {
    useEffect(() => {
        document.title = "Projects - Star Wars Quiz"
    }, [])
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
