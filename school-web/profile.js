//jquery click event to store ID of element that was clicked.
$(document).click(
    function (event) {
        var adminID = $(event.target.parentElement)[0].id;

        //nodeName()
        if (event.target.classList == "profile-pic") {
            var screenWidth = window.innerWidth;
            if (screenWidth < 600) {
                window.open("https://www.youtube.com/watch?v=" + staff[adminID].video + "");
            } else {
                hideElement(adminID+"-pic");
                playVideo(adminID);
                showElement(adminID+"-close-button");
            }
        }

        if (event.target.classList[0] == "close-button") {
            stopProfileVideo(adminID);
            hideElement(adminID+"-video");
            hideElement(adminID+"-close-button");
            showElement(adminID+"-pic");

        }
    }
)
async function showElement(elementID){
    await sleep(500);
    $(`#${elementID}`).fadeIn(500);
}

async function hideElement(elementID){
    await sleep(50);
    $(`#${elementID}`).fadeOut(500);
}




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function makeProfiles(profileData) {
    Object.entries(profileData).forEach(entry => {
        const [key, info] = entry;

        const profileDiv = document.createElement('div');
        profileDiv.id = key;
        profileDiv.classList.add("admin-container");

        const profileHTML = `   
        <img id="${key}-pic" class="profile-pic" src="${info.pictureUrl}" />
        <div id="${key}-video" style="display: none"></div>
        <h1>${info.name}</h1>
        <p class="title">${info.title}</p>
        <p class="phone">${info.name}</p>
        <a href="mailto:${info.email}">${info.email}</a>
        <p class="students">${info.students}</p>
        <img src="cancel.svg" class="close-button" id="${key}-close-button" style="display:none">
        `;

        profileDiv.innerHTML = profileHTML;
        var mainElement = document.getElementById("main");

        mainElement.appendChild(profileDiv);

    });
}

function stopProfileVideo(adminID) {
    const video = document.getElementById(adminID + "-video");
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

async function playVideo(adminID) {
    await sleep(490);
    var adminVideo = document.getElementById(adminID + "-video");
    showElement(adminID+"-video");
    makePlayer(adminID);
    window.location.hash = adminID + "-video";
}

function makePlayer(adminID) {
    var player = new YT.Player(adminID + "-video", {
        height: "390",
        width: "640",
        videoId: staff[adminID].video,
        playerVars: {
            'autoplay': 1,
            'fs': 1,
            'enablejsapi': 1
        },
        events: {
            'onReady': onPlayerReady,
        }
    })
}

//youtube API Stuff
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}