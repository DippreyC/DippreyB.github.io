import Project from "./project.js";
import DomFactory from "./dom.js"

class Application {
    constructor(){
        this.currentProjectIndex = 0;
        this.projects = [];

        this.addProject("Path of Exile");
        this.addProject("World of Warcraft");
        this.renderApplication();
        this.addDefaultTasks();
        
        this.setActiveProject(0);
    }

    renderApplication() {
        this.renderSideBar()
        this.renderTasks();
    }

    renderSideBar(){
        this.projects.forEach((project) => {
            new DomFactory(project).renderElement();
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
    }

    setActiveProject(index){
        this.clearTasks()
        this.currentProjectIndex = index;
        this.renderTasks();
    }

    clearTasks(){
        document.getElementById("tasks").innerHTML = "";
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

/* setActiveProject should be called from index.html as part of an event listener.
   When called should remove the current existing active-project class and add it to the clicked element
   
   render tasks should be passed a Project.

   eventListener(click, (e) => {
       clickedProject = e.target;
       getClass or ID of clickedProject.
       passID to setActiveProject
   })

*/