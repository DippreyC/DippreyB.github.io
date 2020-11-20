import React from 'react';
import './App.css';
import Personal from "./components/Personal";
import Work from './components/Work';
import Education from './components/Education';

const initialPersonalInfo = [
  {
    id: "personalName",
    value: "Caine Dipprey",
    editable: true,
    category: "personal",
  },
  {
    id: "personalAddress",
    value: "123 Street",
    editable: false,
    category: "personal",
  },
  {
    id: "personalPhone",
    value: "940-123-1234",
    editable: false,
    category: "personal",
  },
  {
    id: "currentJobTitle",
    value: "Teacher",
    editable: false,
    category: "personal",
  }
]

const initalWorkInfo = [
  {
    id: "job0",
    title: {
      id: "title",
      value: "Teacher",
      editable: false,
      category: "work",
      jobid: "job0",
    },
    employer: {
      id: "employer",
      value: "LISD",
      editable: false,
      category: "work",
      jobid: "job0",
    },
    startDate: {
      id: "startDate",
      value: "Start Date",
      editable: false,
      category: "work",
      jobid: "job0",
    },
    endDate: {
      id: "endDate",
      value: "End Date",
      editable: false,
      category: "work",
      jobid: "job0",
    },
    jobDescription: {
      id: "jobDescription",
      value: "Job Description",
      editable: false,
      category: "work",
      jobid: "job0",
    },
  },

]

const jobTemplate = {
    id: "job0",
    title: {
      id: "title",
      value: "Job Title",
      editable: false,
      category: "work",
      jobid: "",
    },
    employer: {
      id: "employer",
      value: "Employer",
      editable: false,
      category: "work",
      jobid: "",
    },
    startDate: {
      id: "startDate",
      value: "Start Date",
      editable: false,
      category: "work",
      jobid: "job0",
    },
    endDate: {
      id: "endDate",
      value: "End Date",
      editable: false,
      category: "work",
      jobid: "job0",
    },
    jobDescription: {
      id: "jobDescription",
      value: "Job Description",
      editable: false,
      category: "work",
      jobid: "job0",
    },
    
}

const initialEducationInfo = [
  //initialSchoolObject
  { 
    id: "school0",
    schoolName: {
      id: "schoolName",
        value: "School",
        editable: false,
        category: "education",
        jobid: "school0",
    },
    major: {
      id: "major",
        value: "Major",
        editable: false,
        category: "education",
        jobid: "school0",
    },
    gpa: {
      id: "gpa",
        value: "GPA",
        editable: false,
        category: "education",
        jobid: "school0",
    },
    schoolDescription: {
      id: "schoolDescription",
        value: "Description",
        editable: false,
        category: "education",
        jobid: "school0",
    },
  },
]

const schoolTemplate = {
  id: "school0",
  schoolName: {
    id: "schoolName",
      value: "School",
      editable: false,
      category: "education",
      jobid: "school0",
  },
  major: {
    id: "major",
      value: "Major",
      editable: false,
      category: "education",
      jobid: "school0",
  },
  gpa: {
    id: "gpa",
      value: "GPA",
      editable: false,
      category: "education",
      jobid: "school0",
  },
  schoolDescription: {
    id: "schoolDescription",
      value: "Description",
      editable: false,
      category: "education",
      jobid: "school0",
  },
  
}


function App() {

  const [personalInfo, setPersonalInfo] = React.useState(initialPersonalInfo);
  const [workInfo, setWorkInfo] = React.useState(initalWorkInfo);
  const [educationInfo, setEducatiuon] = React.useState(initialEducationInfo);

  const handleInputChange = (e) =>{
    
    let stateToBeUpdated = [];
    if(e.target.classList.contains("personal")) stateToBeUpdated = [...personalInfo];
    if(e.target.classList.contains("work")) stateToBeUpdated = [...workInfo];
    if(e.target.classList.contains("education")) stateToBeUpdated = [...educationInfo];
    
    const updatedStateInfo = stateToBeUpdated.map( item => {
      
       const jobid = e.target.getAttribute("jobid");
       if(e.target.id === item.id){
        if(e.type ==="change")item.value = e.target.value;
        if(e.type === "blur") item.editable = false;
        if(e.type === "click") item.editable = true;
       }
       else
       if(jobid === item.id){
        if(e.type ==="change")item[e.target.id].value = e.target.value;
        if(e.type === "blur") item[e.target.id].editable = false;
        if(e.type === "click") item[e.target.id].editable = true;
       }
      


       return item;
     });
    if(e.target.classList.contains("personal")) setPersonalInfo(updatedStateInfo);
    if(e.target.classList.contains("work")) setWorkInfo(updatedStateInfo);
    if(e.target.classList.contains("education")) setEducatiuon(updatedStateInfo);
  }


  const addJob = () => {
    let updatedWork = [...workInfo];

    let newJob =Object.assign({},jobTemplate);
    newJob.id = "job"+updatedWork.length;

    newJob["employer"].jobid = newJob.id;
    newJob["title"].jobid = newJob.id;
    newJob["startDate"].jobid = newJob.id;
    newJob["endDate"].jobid = newJob.id;
    newJob["jobDescription"].jobid = newJob.id;
    
    updatedWork.push(newJob);
    setWorkInfo(updatedWork);
  }

  const addSchool = () => {
    let updatedEdducation = [...educationInfo];
    let newSchool = Object.assign({},schoolTemplate)
    newSchool.id = "school"+updatedEdducation.length;

    newSchool["schoolName"].jobid = newSchool.id;
    newSchool["major"].jobid = newSchool.id;
    newSchool["gpa"].jobid = newSchool.id;
    newSchool["schoolDescription"].jobid = newSchool.id;

    updatedEdducation.push(newSchool);
    console.log(updatedEdducation);
    setEducatiuon(updatedEdducation);

  }


  return (
    <>
      <div>CV APP</div>
      
      <Personal 
        personalInfo={personalInfo} 
        handleInputChange={handleInputChange}
      />
      <hr/>

      <div><h2>Work!</h2></div>
      <Work
        workInfo={workInfo}
        handleInputChange={handleInputChange}
      />
      <button value="Add Job" onClick={addJob} >Add Job</button>
      <hr/>

      <div><h2>Education</h2></div>
      <Education
        educationInfo = {educationInfo}
        handleInputChange ={handleInputChange}
      />
      
      <button onClick={addSchool} >Add School</button>
    </>
  );
}

export default App;
