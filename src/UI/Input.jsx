import React from 'react';

const Input = ({type, onChange}) => {
    const inputStyle = {
        width: '50px',
        height: '50px'
    }
    return (
        <input onChange={onChange} style={inputStyle} type={type}/>
    );
};

export default Input;