import React from 'react';
import Job from './Job';

const Work = ({workInfo, handleInputChange}) =>{

    //Iterate through all jobs inside work component
    return (
    <div className="jobsContainer">
        {workInfo.map( job => {
            return <Job key={job.id} jobInfo={job} handleInputChange={handleInputChange}/>
        })
        }
    
    </div>
    )


}

export default Work;