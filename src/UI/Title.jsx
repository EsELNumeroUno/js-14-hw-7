import React from 'react';

const Title = (props) => {
    const titleStyle = {
        fontSize: '30px',
        fontWeight: 'bold',
        lineHeight: '50px',
    }
    return (
        <p style={titleStyle}>{props.children} уй тапшырма</p>
    );
};

export default Title;