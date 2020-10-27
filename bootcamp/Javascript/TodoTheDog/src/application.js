import Project from "./project.js";
import DomFactory from "./dom.js"

class Application {
    constructor(){
        this.currentProjectIndex = 0;
        this.projects = [];
        this.addProject("Path of Exile");
        this.addProject("World of Warcraft");
        
        this.addDefaultTasks();
        this.renderApplication();
        this.setActiveProject(0);
    }

    renderApplication() {
        this.renderProjects()
        //this.renderTasks();
    }

    renderProjects(){
        //this.clearProjects();
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

    addProject(title) {
        const newProject = new Project(title);
        this.projects.push(newProject);
        this.renderProjects();
        if(this.projects.length == 1)
            this.setActiveProject(0);
    }

    removeProject(index){
        
        new DomFactory(this.projects[index]).removeElement();
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
        document.getElementsByClassName("project")[this.currentProjectIndex].classList.remove("active-project");
        
        this.currentProjectIndex = index;
        this.projects[this.currentProjectIndex].active = true;
        document.getElementsByClassName("project")[this.currentProjectIndex].classList.toggle("active-project");
        this.renderTasks();
        document.getElementById("tasks-header").innerHTML = this.projects[this.currentProjectIndex].title;

    }


    clearTasks(){
        document.getElementById("tasks").innerHTML = "";
    }
    clearProjects(){
        document.getElementById("projects").innerHTML ="";
    }


    addDefaultTasks(){
        this.projects[0].addTask("Get exalted orbs.","Farm heist for more orbs",false,"10/23/2020","10/24/2020");
        this.projects[0].addTask("Level golemancer","Get to level 70",false,"10/23/2020","10/24/2020");
        this.projects[1].addTask("Get 2.5 helm on warlock.","No idols needed, just go to AQ40.",false,"10/24/2020","10/25/2020");
        this.projects[1].addTask("ZG GDKP","Buy idol at all costs",false,"10/24/2020","10/25/2020");
        this.projects[1].addTask("Level hunter","For fun yo",false,"10/24/2020","10/25/2020");
    }
}

export default Application;

