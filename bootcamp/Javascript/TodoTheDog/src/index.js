import Project from "./project.js";
import DomFactory from "./dom.js";
import Application from "./application";

const application = new Application();


window.addEventListener("load", function(e){
    
    document.getElementById("projects").addEventListener("click", function(e){
        
        var index = Array.prototype.indexOf.call(this.children, e.target.parentNode);
        

        if(e.target.classList.contains("project-name")){
            application.setActiveProject(index);
        }

        if(e.target.classList.contains("project-remove-btn")){
            application.removeProject(index);
        }

        
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
                    application.addProject(modalInput.value);
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
        console.log(e.target)
        //when target is check btn, edit task status for task object in project.
        //add completed class to closest completion bar.
        //write complete task method in application

    });

    

});
/*
const testProject = new Project("Test Project");
testProject.addTask("caine","please work",false,"10/20/22","10/40/12");


const projectElement = new DomFactory(testProject);
projectElement.renderElement();
*/




// on load renderApp()