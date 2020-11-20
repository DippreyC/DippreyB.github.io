import React from 'react';

const InputField = ({info,handleInputChange}) => {
    const {editable,value, id, category, jobid} = info;
    return (
        <>
            {editable ? 
            <input type="text" value={value} jobid={jobid} id={id} className={category} autoFocus onChange={(e) => handleInputChange(e)} onBlur={(e) => handleInputChange(e)}/> 
            : 
            <div value={value} id={id} jobid={jobid} className={category} onClick={(e) => handleInputChange(e)}>{value}</div>
            }
        </>
    )

    
}

export default InputField;