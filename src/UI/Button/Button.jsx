import React from 'react';
import css from './Button.module.css'

const Button = (props) => {
    const btnStyle = {
        textTransform: `${props.textCase? props.textCase: 'normal'}`,
        padding: '10px 30px',
        borderRadius: '10px',
        border: 'none',
        background: `${props.variant === 'outline'? '#f2f7fb': '#247bc2'}`,
        color: `${props.variant === 'outline'? '#50a7d9': 'white'}`,
        cursor: 'pointer',
        hover: {background: '#247bc270'}
    }

    // неудачная попытка
    const btnOnclick = () => {
        return props.onClick(props.children)
    }
    return (
        // неудачная попытка
        <button className={css.btn} onClick={btnOnclick} style={btnStyle}>{props.children}</button>

        // <button onClick={props.onClick} style={btnStyle}>{props.children}</button>
    );
};

export default Button;