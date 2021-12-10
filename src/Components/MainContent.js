import React from 'react';

const MainContent = ({children}) => {
    return (
        <div style={{minHeight: "94vh"}}>
            {children}
        </div>
    );
};

export default MainContent;
