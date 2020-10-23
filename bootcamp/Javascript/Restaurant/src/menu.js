function renderMenu(){
    const contentDiv = document.getElementById("content");
    
    const element = document.createElement("div");
    element.id = "menu"
    element.innerHTML = `This be the menu`;
    console.log(element);
    contentDiv.appendChild(element);

}

export {renderMenu};