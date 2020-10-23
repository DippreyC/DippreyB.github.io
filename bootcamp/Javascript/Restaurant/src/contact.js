function renderContact(){
    const contentDiv = document.getElementById("content");
    
    const element = document.createElement("div");
    element.id = "menu"
    element.innerHTML = `Contact Us`;
    console.log(element);
    contentDiv.appendChild(element);

}

export {renderContact};