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
            newDiv.innerHTML = 
            `<div class="task-content">
                <div class="task-content-column">
                    <div class="task-name">${this.element.title}</div>
                    <div class="task-description">${this.element.description}</div>
                </div>
                <div class="task-content-column">
                    <div class="task-completed-by">Complete by:</div>
                    <div class="task-end-date">${this.element.endDate}</div>
                </div>
            </div>
            <div class="task-btns">
                <i class="material-icons task-remove-btn">check</i>
                <i class="material-icons task-remove-btn">edit</i>
                <i class="material-icons task-remove-btn">delete</i>
            </div>
            <div class="task-completion-bar">
            </div>
            `;

            newDiv.classList.add("task")
        }
        if(this.element.hasOwnProperty("className") && this.element.className === "Project"){
            this.parentDiv = document.getElementById("projects");
            newDiv.innerHTML = `<div class="project-name">${this.element.title}</div><i class="material-icons project-remove-btn">delete</i>`;
            newDiv.classList.add(`project`);
            if(this.element.active) newDiv.classList.add("active-project");
        }
        //const notInDom = Array.prototype.indexOf.call(this.parentDiv.children, newDiv) == -1;
        //console.log(newDiv.id + " is not in dom " + notInDom, this.parentDiv)
        
        if(!this.element.loaded){
            this.parentDiv.appendChild(newDiv);
            console.log("Created element " + newDiv.id)
        }
        return newDiv;
    }

    removeElement(){
        console.log("removed element: " + this.element.title)
        document.getElementById(this.element.title).remove();
    }

}

export default DomFactory;