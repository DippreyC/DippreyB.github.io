import {init} from "./init";
import {renderWelcome} from './welcome';
import {renderMenu} from './menu';
import {renderContact} from './contact';

document.addEventListener("DOMContentLoaded",init);
document.addEventListener("DOMContentLoaded",addTabListeners);

function clearContent(){
    document.getElementById("content").innerHTML = "";
}

function addTabListeners(){
    const tabs = document.getElementsByClassName("tab");
    Array.from(tabs).forEach( (tab) => {
        tab.addEventListener("click", e => {
            
            document.getElementsByClassName("active")[0].classList.remove("active");
            tab.classList.add("active");
            clearContent();
            if(e.target.innerHTML === "Welcome!")
                renderWelcome();
            if(e.target.innerHTML === "Menu")
                renderMenu();
            if(e.target.innerHTML === "Contact Us")
                renderContact();
        })
    })
}





