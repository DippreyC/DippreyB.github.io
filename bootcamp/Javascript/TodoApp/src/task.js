class Task {
    constructor(title,description,complete,endDate){
        this.className = "Task";
        this.title = title;
        this.description = description;
        this.complete = complete;
        this.endDate = endDate;
    }

    updateFields(title,description,complete,endDate){
        this.title = title;
        this.description = description;
        this.complete = complete;
        this.endDate = endDate;
    }

    completeTask(){
        this.complete = true;
    }
}

export default Task;