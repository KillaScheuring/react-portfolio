import React from 'react';

const ItemWithHeader = ({title, text}) => {
    return (
        <div>
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
