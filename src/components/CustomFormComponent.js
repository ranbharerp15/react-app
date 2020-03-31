import React from 'react';
export const CustomFormComponent = () => {
        return <input 
        type = {this.props.type} 
        placeholder= {this.props.placeholder}
        onChange= {this.props.onChange}
        />;
}
