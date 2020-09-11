$(document).click(function (event) {
    var clicked = $(event.target.parentElement)[0].id;
    playVideo(clicked);
})

function makeProfiles(profileData) {
    Object.entries(profileData).forEach(entry => {
        const [key, info] = entry;
        console.log(key, info.title);

        const profileDiv = document.createElement('div');
        profileDiv.id = key;
        profileDiv.classList.add("admin-container");

        const profileHTML = `   
        <img id="${key}-pic" src="${info.pictureUrl}" />
        <div id="${key}-video" style="display: none"></div>
        <h1>${info.name}</h1>
        <p class="title">${info.title}</p>
        <p class="phone">${info.name}</p>
        <a href="mailto:boughtona@lisd.net">${info.email}</a>
        <p class="students">${info.students}</p>
        `;

        profileDiv.innerHTML = profileHTML;
        var mainElement = document.getElementById("main");

        mainElement.appendChild(profileDiv);

    });
}


function playVideo(adminID) {

    var screenWidth = window.innerWidth;
    var playerWidth;
    var playerHeight;

    var adminVideo = document.getElementById(adminID + "-video");
    var adminPic = document.getElementById(adminID + "-pic");

    adminPic.style.display = "none";
    adminVideo.style.display = "block";

    if (screenWidth < 600) {
        playerWidth = screenWidth - 40;
        playerHeight = playerWidth / 1.64;
    } else {
        playerWidth = '640';
        playerHeight = '390';
    }

    makePlayer(adminID, playerWidth, playerHeight);

}

function makePlayer(videoID, width, height) {
    var player = new YT.Player(videoID + "-video", {
        height: height,
        width: width,
        videoId: staff[videoID].video,
        playerVars: {
            'autoplay': 1,
            'fs': 1
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
    console.log(event);
    event.target.mute();
    event.target.playVideo();
}