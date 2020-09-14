//jquery click event to store ID of element that was clicked.
$(document).click(
    function (event) {
        var profileID = $(event.target.parentElement)[0].id;
        var profilePic = profileID+"-pic";
        var profileVideo = profileID+"-video";
        var profileCloseButton = profileID+"-close-button";

        if (event.target.classList == "profile-pic") {
            var screenWidth = window.innerWidth;
            if (screenWidth < 600) {
                window.open("https://www.youtube.com/watch?v=" + staff[profileID].video + "");
            } else {
                hideElement(profilePic);
                showElement(profileVideo);
                makePlayer(profileVideo,profileID);
                showElement(profileCloseButton);
                pageJump(profileVideo);
            }
        }

        if (event.target.classList[0] == "close-button") {
            stopProfileVideo(profileVideo);
            hideElement(profileVideo);
            hideElement(profileCloseButton);
            showElement(profilePic);
            pageJump(profileID);
        }
    }
)

function makePlayer(profileVideo,profileID) {
    var player = new YT.Player(profileVideo, {
        height: "390",
        width: "640",
        videoId: staff[profileID].video,
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

function stopProfileVideo(profileVideo) {
    const video = document.getElementById(profileVideo);
    video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

function makeProfiles(staffProfiles) {
    Object.entries(staffProfiles).forEach(entry => {
        const [key, fields] = entry;

        const profileDiv = document.createElement('div');
        profileDiv.id = key;
        profileDiv.classList.add("admin-container");

        const profileHTML = `   
        <img id="${key}-pic" class="profile-pic" src="${fields.pictureUrl}" />
        <div id="${key}-video" style="display: none"></div>
        <h1>${fields.name}</h1>
        <p class="title">${fields.title}</p>
        <p class="phone">${fields.name}</p>
        <a href="mailto:${fields.email}">${fields.email}</a>
        <p class="students">${fields.students}</p>
        <img src="cancel.svg" class="close-button" id="${key}-close-button" style="display:none">
        `;

        profileDiv.innerHTML = profileHTML;
        var mainElement = document.getElementById(`${fields.category}`);
        mainElement.appendChild(profileDiv);
    });
}

async function showElement(elementID){
    await sleep(500);
    $(`#${elementID}`).fadeIn(500);
}

async function hideElement(elementID){
    await sleep(50);
    $(`#${elementID}`).fadeOut(500);
}

async function pageJump(elementID){
    await sleep(600);
    document.getElementById(elementID).scrollIntoView({behavior: 'smooth'});
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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