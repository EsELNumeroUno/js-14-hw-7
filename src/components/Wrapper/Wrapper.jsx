import React from 'react';
import Title from "../../UI/Title.jsx";
import Button from "../../UI/Button/Button.jsx";

const Wrapper = (props) => {
    const wrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid red',
        padding: '5px'
    }


    return (
        <div style={wrapperStyle}>
            <Title>{props.title}</Title>
            <div style={{display: "flex", flexDirection: 'row', columnGap: '10px'}}>
                {props.children}
            </div>
        </div>
    );
};

export default Wrapper;