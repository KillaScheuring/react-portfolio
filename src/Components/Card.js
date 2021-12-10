import React from 'react';
import PropTypes from "prop-types";

const Card = ({
                  cardClass,
                  header,
                  cardHeaderClass, cardHeaderTitleClass,
                  headerIcon,
                  cardHeaderIconClass,
                  image,
                  cardImageClass, figureImageClass,
                  media,
                  mediaClass, mediaContentClass,
                  content,
                  cardContentClass,
    ...rest
              }) => {
    return (
        <>
            <div className={`card ${cardClass}`} {...rest}>
                {header && (
                    <header className={`card-header ${cardHeaderClass}`}>
                        <p className={`card-header-title ${cardHeaderTitleClass}`}>
                            {header}
                        </p>
                        {headerIcon && (
                            <button className={`card-header-icon ${cardHeaderIconClass}`} aria-label={"more options"}>
                                <div className={"icon"}>
                                    <i className={`fas fa-${headerIcon}`} aria-hidden={"true"}/>
                                </div>
                            </button>
                        )}
                    </header>
                )}
                {image && (
                    <div className={`card-image ${cardImageClass}`}>
                        <figure className={`image ${figureImageClass}`}>
                            <img src={image?.src} alt={image?.alt}/>
                        </figure>
                    </div>
                )}
                {media?.media && (
                    <div className={`media ${mediaClass}`}>
                        <div className={`media-${media?.mediaAlign || "left"}`}>
                            {media?.media}
                        </div>
                        <div className={`media-content ${mediaContentClass}`}>
                            {media?.content}
                        </div>
                    </div>
                )}
                <div className={`card-content ${cardContentClass}`}>
                    <div className={"content"}>
                        {content}
                    </div>
                </div>
            </div>
        </>
    );
};
Card.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    media: PropTypes.shape({
        media: PropTypes.any,
        content: PropTypes.any,
        mediaAlign: PropTypes.string
    }),
    content: PropTypes.any,
    header: PropTypes.any,
    headerIcon: PropTypes.string,
    cardClass: PropTypes.string,
    cardHeaderClass: PropTypes.string,
    cardHeaderTitleClass: PropTypes.string,
    cardHeaderIconClass: PropTypes.string,
    cardContentClass: PropTypes.string,
};

export default Card;
