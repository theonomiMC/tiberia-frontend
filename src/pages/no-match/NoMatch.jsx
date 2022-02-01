import React from 'react';
import './NoMatch.css'

const NoMatch = () => {
    return <div className='no-match'>
        <h1 className='err-title'>404</h1>
        <h2 className='err-subtitle'>we can't find page</h2>
    </div>;
};

export default NoMatch;
