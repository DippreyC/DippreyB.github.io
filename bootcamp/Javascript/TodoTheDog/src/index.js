import Project from "./project.js";
import DomFactory from "./dom.js";
import Application from "./application";

const application = new Application();


window.addEventListener("load", function(e){

    //set Header to current project
    document.querySelector("#tasks-header").innerHTML = document.querySelector(".active-project").innerHTML;
    

    //rewrite all this shit
    document.getElementById("projects").addEventListener("click", function(e){
        const project = e.target.parentNode;
        const index = Array.prototype.indexOf.call(this.children, project);

        if(e.target.classList.contains("project-name")){
            if(this.children.length > 0)
                this.querySelector(".active-project").classList.toggle("active-project");
            project.classList.toggle("active-project");
            application.setActiveProject(index);
        }

        if(e.target.classList.contains("project-remove-btn") && this.children.length > 1){
            
            if(project.classList.contains("active-project")){
                project.remove();
                if(this.children.length > 0)
                this.querySelector(".project").classList.add("active-project");
            }
            else project.remove();
            
            application.removeProject(index);
        }
        
        
        //if(this.children.length > 0)
        document.querySelector("#tasks-header").innerHTML = document.querySelector(".active-project").innerHTML;
        //else document.querySelector("#tasks-header").innerHTML = "Create a project!"
    });


    //open modal window event
    document.getElementsByClassName("projects-header")[0].addEventListener("click", function(e){

        
        if(e.target.id == "add-project-btn"){
            const modal = document.getElementById("myModal");
            const closeModal = document.getElementsByClassName("modal-close")[0];
            const modalSubmit = document.getElementById("project-submit-btn");
            const modalInput = document.getElementById("project-name-input");
            modal.style.display = "block";

            window.onclick = function(e) {
                if(e.target == modal || e.target == closeModal) {
                    modal.style.display = "none";
                    modalInput.value = "";
                }
                if(e.target == modalSubmit){
                    modal.style.display = "none";
                    application.addProject(modalInput.value,false);
                    modalInput.value = "";
                   
                }
            }


        }

        if(e.target.id == "projects-header-title" || e.target.classList.contains("material-icons")){
            console.log("hiding projects");
            document.getElementById("projects").classList.toggle("projects-hidden");
        }
        
    });


    document.getElementById("tasks").addEventListener("click",function(e){

        const parentTask = e.target.closest(".task");
        const index = Array.prototype.indexOf.call(this.children, parentTask);

        function getTaskElement(selector){
            return parentTask.querySelector(selector);
        }

        const taskContent = getTaskElement(".task-content");
        const taskName = getTaskElement(".task-name");
        const taskDescription = getTaskElement(".task-description");
        const taskEndDate =  getTaskElement(".task-end-date");
        const taskBtns = getTaskElement(".task-btns");
        
        const inputForm = getTaskElement(".task-input-form");
        const nameInput = getTaskElement(".task-name-input");
        const descriptionInput =  getTaskElement(".task-description-input");
        const endDateInput = getTaskElement(".task-end-date-input");
        
        const completionBar = getTaskElement(".task-completion-bar");
        
        
        if(e.target.classList.contains("task-complete-btn")){
            completionBar.classList.toggle("task-completed");
            application.completeTask(index); //need to update object prop
        }

        if(e.target.classList.contains("task-input-close-btn")){ 
            //hide input form
            inputForm.style.display = "none";
            //show content and buttons
            taskContent.style.display = "flex";
            taskBtns.style.display = "flex";
            //reset values to match Task obj props
            const taskData = application.getTask(index);
            nameInput.value = taskData.title;
            descriptionInput.innerHTML = taskData.description;
            endDateInput.value = taskData.endDate;
        }

        if(e.target.classList.contains("task-edit-btn")){
            //show input form 
            inputForm.style.display = "block";
            //hide content
            taskContent.style.display = "none";
            taskBtns.style.display = "none";
        }

        if(e.target.classList.contains("task-input-submit-btn")){ 
            const taskData = application.getTask(index);
            //update object props
            taskData.title = nameInput.value;
            taskData.description = descriptionInput.value;
            taskData.endDate = endDateInput.value;
            //display new props in dom
            taskName.innerHTML = taskData.title;
            taskDescription.innerHTML = taskData.description;
            taskEndDate.innerHTML = taskData.endDate;
            //show & hide elements
            taskContent.style.display = "flex";
            taskBtns.style.display = "flex";
            inputForm.style.display = "none";
        }
        
    });


    Array.from(document.getElementsByClassName("task-input-form")).forEach(form => {
        form.addEventListener("submit",function(e) {
            e.preventDefault();
        })
        
    });

    

    

});
/*
const testProject = new Project("Test Project");
testProject.addTask("caine","please work",false,"10/20/22","10/40/12");


const projectElement = new DomFactory(testProject);
projectElement.renderElement();
*/




// on load renderApp()

            