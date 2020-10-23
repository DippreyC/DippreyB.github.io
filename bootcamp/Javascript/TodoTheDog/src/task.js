class Task {
    constructor(title,description,status,startDate,endDate){
        this.className = "Task";
        this.title = title;
        this.description = description;
        this.status = status;
        this.startDate =startDate;
        this.endDate = endDate;
    }

    updateFields(title,description,status,startDate,endDate){
        this.title = title;
        this.description = description;
        this.status = status;
        this.startDate =startDate;
        this.endDate = endDate;
    }

    completeTask(){
        this.status = true;
    }
}

export default Task;