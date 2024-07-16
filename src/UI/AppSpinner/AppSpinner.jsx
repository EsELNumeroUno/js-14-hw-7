import React from 'react';
import css from './AppSpinner.module.css'

const AppSpinner = () => {
    return (
        <div className={css.parent}>
            <div className={css.child}></div>
        </div>
    );
};

export default AppSpinner;