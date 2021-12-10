import React from 'react';

const MainContent = ({children}) => {
    return (
        <div style={{padding: "1em"}}>
            {children}
        </div>
    );
};

export default MainContent;
