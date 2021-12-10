import React from 'react';
import PropTypes from 'prop-types';
import Card from "./Card";
import {Link} from "react-router-dom";
import {useToggle} from "../utils/hooks";

const ProjectCard = ({title, link, description, image="https://bulma.io/images/placeholders/1280x960.png"}) => {
    const [hover, handleHover] = useToggle()
    return (
        <>
            <Link to={link} className={"column is-one-third"}>
                <Card
                    header={title}
                    image={{src: image, alt: title}}
                    content={description}
                    figureImageClass={"is-4by3"}
                    onMouseEnter={() => handleHover(true)}
                    onMouseLeave={() => handleHover(false)}
                    cardClass={hover ? "has-background-light" : ""}
                />
            </Link>
        </>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.any,
    image: PropTypes.string
};

export default ProjectCard;
