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
                <i class="material-icons task-complete-btn">check</i>
                <i class="material-icons task-edit-btn">edit</i>
                <i class="material-icons task-remove-btn">delete</i>
            </div>

            <form class="task-input-form">
                <div class="task-content form-content">
                    <div class="task-content-column">
                    <label for="title-input">Task</label>
                        <input class="task-name-input" name="title-input" type="text" value="${this.element.title}"></input>
                        <label for="title-input">Description</label>
                        <textarea class="task-description-input" type="text-area"> ${this.element.description}</textarea>
                    </div>
                    <div class="task-content-column">
                        <div class="task-completed-by">Complete by:</div>
                        <input class="task-end-date-input" type="date" value="${this.element.endDate}">
                    </div>
                </div>
                <div class="task-btns">
                    <submit class="material-icons task-input-submit-btn">edit</submit>
                    <i class="material-icons task-input-close-btn">close</i>
                    
                </div>
            </form>

            <div class="task-completion-bar ${this.element.complete ? "task-completed": ""}">
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