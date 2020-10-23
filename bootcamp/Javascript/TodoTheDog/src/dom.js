class DomFactory{
    constructor(element){
        this.element = element;
        this.parentDiv;
    }

    renderElement(){
        const newDiv = document.createElement("div");
        newDiv.innerHTML = this.getHTML();

        this.parentDiv.appendChild(newDiv);
        return newDiv;
        
    }

    getHTML(){
        if(this.element.hasOwnProperty("className") && this.element.className === "Task"){
            this.parentDiv = document.getElementById("tasks");
            return this.getTaskHTML();
        }
        if(this.element.hasOwnProperty("className") && this.element.className === "Project"){
            this.parentDiv = document.getElementById("projects");
            return this.getProjectHTML();
        }
    }

    getTaskHTML(){
        return `<div class="task-title">${this.element.title}</div>`
    }

    getProjectHTML(){
        return `<div class="project-title">${this.element.title}</div>`
    }
}

export default DomFactory;