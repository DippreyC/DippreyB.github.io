function renderWelcome(){
    const contentDiv = document.getElementById("content");
    
    const element = document.createElement("div");
    element.id = "welcome"
    element.innerHTML = `Welcome to the restaurant!`;
    
    contentDiv.appendChild(element);

}

export {renderWelcome};