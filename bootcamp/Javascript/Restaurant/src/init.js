import {renderWelcome} from './welcome';
import {renderMenu} from './menu';
import {renderContact} from './contact';


function init() {
    renderTitle();
    renderTabs();
    renderWelcome();
    //document.body.classList.remove("preload");
}

export {init};

function renderTitle(){
    const body = document.getElementById("body");
    const header = document.createElement("h1");

    header.classList.add("title");
    header.innerHTML = `LOG TOWN`;

    body.insertBefore(header, document.getElementById("content"));
}

function renderTabs() {
    const body = document.getElementById("body");
    const tabBar = document.createElement("div");

    tabBar.id = "tab-bar";
    tabBar.innerHTML = 
        `<div class="tab active" id="welcome-tab">Welcome!</div>
         <div class="tab" id="menu-tab">Menu</div>
         <div class="tab" id="contact-tab">Contact Us</div>`

    body.insertBefore(tabBar, document.getElementById("content"));
}

