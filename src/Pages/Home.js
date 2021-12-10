import React, {useEffect} from 'react';
import Breadcrumbs from "../Components/Breadcrumbs";

const Home = () => {
    useEffect(() => {
        document.title = "Portfolio - Home"
    }, [])
    return (
        <>
            <Breadcrumbs
                tabInfo={[
                    ["Home", "active"]
                ]}
            />
        </>
    );
};

export default Home;
