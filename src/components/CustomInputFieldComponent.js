import React from 'react';

export const CustomInputFieldComponent = props => {
    const { id, type, placeholder, onChange } = props;
    return <input id= {id} type = {type} placeholder={placeholder} onChange={onChange}/>;
}
