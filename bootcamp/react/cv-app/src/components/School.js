import React from 'react';
import InputField from './InputField';

const School = ({schoolInfo, handleInputChange}) =>{

    let jobID = "";

    return Object.keys(schoolInfo).map( schoolField => {
        if(schoolField == "id")
            jobID = schoolInfo[schoolField];
        else{
            return <InputField key={jobID+schoolField} info={schoolInfo[schoolField]} handleInputChange={handleInputChange} />
        }
    })
}

export default School;