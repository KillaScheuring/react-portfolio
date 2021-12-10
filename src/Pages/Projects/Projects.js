import React, {useEffect} from 'react';
import Breadcrumbs from "../../Components/Breadcrumbs";
import ProjectCard from "../../Components/ProjectCard";

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
            <div className={"columns"}>
                <ProjectCard
                    title={"Platformer"}
                    link={"/projects/platformer"}
                    description={"This is a platformer that uses Matter.js and p5.js"}
                />
                <ProjectCard
                    title={"Pokémon Quiz"}
                    link={"/projects/pokemon"}
                    description={"This is a quiz that uses the PokéApi to generate a Pokémon trivia quiz."}
                />
                <ProjectCard
                    title={"Star Wars Quiz"}
                    link={"/projects/star-wars"}
                    description={"This is a quiz that uses the SWAPI to generate a Star Wars trivia quiz."}
                />
            </div>
            <div className={"columns"}>
                <ProjectCard
                    title={"COVID-19 US Map"}
                    link={"/projects/covid-us"}
                    description={"This is a Google Map project that displays covid data using cartesian and polar bar graphs."}
                />
                <ProjectCard
                    title={"COVID-19 World Map"}
                    link={"/projects/covid-world"}
                    description={"This is a Google Map project that displays covid data using cartesian and polar bar graphs."}
                />
            </div>
        </>
    );
};

export default Projects;
