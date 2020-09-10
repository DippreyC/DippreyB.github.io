

$(document).click(function (event) {
    var clicked = $(event.target.parentElement)[0].id;
    playVideo(clicked);
})



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

function playVideo(adminID) {
    var adminVideo = document.getElementById(adminID + "-video");
    var adminPic = document.getElementById(adminID + "-pic");

    adminPic.style.display = "none";
    adminVideo.style.display = "block";
    console.log(window.innerWidth);

    var screenWidth = window.innerWidth;
    var playerWidth;
    var playerHeight;
    if (screenWidth < 600) {
        playerWidth = screenWidth - 40;
        playerHeight = playerWidth / 1.64;
    } else {
        playerWidth = '640';
        playerHeight = '390';
    }


    makePlayer(adminID,playerWidth,playerHeight);

}

//youtube
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onPlayerReady(event) {
    console.log(event);
    event.target.mute();
    event.target.playVideo();
}
