import React from 'react';

const ItemWithHeader = ({title, text, ...rest}) => {
    return (
        <div {...rest}>
            <div>
                <h6>{title}</h6>
            </div>
            <div>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default ItemWithHeader;
