import Task from './task';

class Project{
    constructor(title){
        this.className = "Project";
        this.title = title;
        this.tasks = [];
        this.active = false;
    }

    addTask(title,description,status,startDate,endDate){
        const newTask = new Task(title,description,status,startDate,endDate);
        this.tasks.push(newTask);
    }

    removeTask(index){
        this.tasks.splice(index,1);
    }

    getProjectLength(){
        return this.tasks.length;
    }

    clearTasks(){
        this.tasks = [];
    }

}

export default Project;