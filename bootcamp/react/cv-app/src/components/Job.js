import React from "react";
import InputField from "./InputField";

const Job = ({jobInfo,handleInputChange}) => {
    let jobID = "";
    
    //iterate through all jobFields inside a job
    return (
       <div className="jobContainer">
          {
            Object.keys(jobInfo).map( jobField =>{
            
            if(jobField === "id") 
            jobID = jobInfo[jobField];
            else{
               
               return <InputField key={jobID+jobField} info={jobInfo[jobField]} handleInputChange={handleInputChange} />
            }
            
            })
         }
      </div>
    )
    
}

export default Job;