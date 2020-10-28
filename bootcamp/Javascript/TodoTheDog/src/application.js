import Project from "./project.js";
import DomFactory from "./dom.js"

class Application {
    constructor(){
        this.currentProjectIndex = 0;
        this.projects = [];
        this.addProject("Path of Exile",true);
        this.addProject("World of Warcraft",false);
        
        this.addDefaultTasks();
        this.renderApplication();
        this.setActiveProject(0);
    }

    renderApplication() {
        this.renderProjects()
        //this.renderTasks();
    }

    renderProjects(){
        this.projects.forEach((project) => {
            new DomFactory(project).renderElement();
            project.loaded = true;
        })
    }

    renderTasks(){
        const currentProject = this.projects[this.currentProjectIndex];
        currentProject.tasks.forEach((task) => {
            new DomFactory(task).renderElement();
        })
    }

    addProject(title,active) {
        const newProject = new Project(title,active);
        this.projects.push(newProject);
        this.renderProjects();
        if(this.projects.length == 1)
            this.setActiveProject(0);
    }

    removeProject(index){
        
        //new DomFactory(this.projects[index]).removeElement();
        this.projects.splice(index,1);
        this.currentProjectIndex = 0;
        if(this.projects.length < 1){
            this.clearTasks();
        }
        else this.setActiveProject(0);
    }

    setActiveProject(index){
        this.clearTasks();
        this.projects[this.currentProjectIndex].active = false;
        this.currentProjectIndex = index;
        this.projects[this.currentProjectIndex].active = true;
        this.renderTasks();
    }

    completeTask(index){
        const task = this.projects[this.currentProjectIndex].tasks[index];
        task.complete = !task.complete;
    }

    getTask(index){
        return this.projects[this.currentProjectIndex].tasks[index];
    }


    clearTasks(){
        document.getElementById("tasks").innerHTML = "";
    }
    clearProjects(){
        document.getElementById("projects").innerHTML ="";
    }


    addDefaultTasks(){
        this.projects[0].addTask("Get exalted orbs.","Farm heist for more orbs",false,"2020-10-24");
        this.projects[0].addTask("Level golemancer","Get to level 70",false,"2020-10-24");
        this.projects[1].addTask("Get 2.5 helm on warlock.","No idols needed, just go to AQ40.",false,"2020-10-24");
        this.projects[1].addTask("ZG GDKP","Buy idol at all costs",false,"2020-10-24");
        this.projects[1].addTask("Level hunter","For fun yo",false,"2020-10-24");
    }
}

export default Application;

