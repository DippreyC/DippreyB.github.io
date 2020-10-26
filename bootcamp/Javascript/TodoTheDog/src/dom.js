class DomFactory{
    constructor(element){
        this.element = element;
        this.parentDiv;
    }

    renderElement(){
        const newDiv = document.createElement("div");
        newDiv.id = this.element.title;
        if((this.element.hasOwnProperty("className") && this.element.className === "Task")){
            this.parentDiv = document.getElementById("tasks");
            newDiv.innerHTML = `<div class="project-name">${this.element.title}</div><span class="task-remove-btn">X</span>`;
            newDiv.classList.add("task-title")
        }
        if(this.element.hasOwnProperty("className") && this.element.className === "Project"){
            this.parentDiv = document.getElementById("projects");
            newDiv.innerHTML = `<div class="project-name">${this.element.title}</div><span class="project-remove-btn">X</span>`;
            newDiv.classList.add(`project-title`);
            if(this.element.active) newDiv.classList.add("active-project");

        }
        this.parentDiv.appendChild(newDiv);
        return newDiv;
    }

}

export default DomFactory;