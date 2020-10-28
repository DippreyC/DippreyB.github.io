class Task {
    constructor(title,description,complete,endDate){
        this.className = "Task";
        this.title = title;
        this.description = description;
        this.complete = complete;
        this.endDate = endDate;
    }

    updateFields(title,description,status,startDate,endDate){
        this.title = title;
        this.description = description;
        this.complete = status;
        this.endDate = endDate;
    }

    completeTask(){
        this.complete = true;
    }
}

export default Task;