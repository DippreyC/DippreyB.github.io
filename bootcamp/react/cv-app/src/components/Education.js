import React from 'react';
import School from './School';

const Education = ({educationInfo, handleInputChange}) =>{

    return educationInfo.map(school => {
        return <School key={school.id} schoolInfo = {school} handleInputChange={handleInputChange} />
    })
}

export default Education;