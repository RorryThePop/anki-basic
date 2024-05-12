import React from 'react';
import cls from './CustomUi.module.css'
const CustomButton = (props) => {
    const {text, onHandleClick} = props
    return (
        <button className={cls.btn} onClick={onHandleClick}>
            {text}
        </button>
    );
};

export default CustomButton;
