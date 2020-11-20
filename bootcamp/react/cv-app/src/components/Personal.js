import React from "react";
import InputField from './InputField';

const Personal = ({personalInfo, handleInputChange}) => {

    return (
        <div id="personal">
        {
            personalInfo.map( info => {
                return <InputField key={info.id} info={info} handleInputChange={handleInputChange} />
                }
            )
        }
    </div>

    );

}

export default Personal;

