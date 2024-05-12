import React from 'react';
import cls from './CustomUi.module.css'
const CustomInput = (props) => {
    const {value, onHandleChange} = props
    return (
        <div className={cls.inputForm}>
            <input type="text" value={value} onChange={onHandleChange}/>
        </div>
    );
};

export default CustomInput;
