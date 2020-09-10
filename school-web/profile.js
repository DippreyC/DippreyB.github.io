var videoID;

$(document).click(function (event) {
    var clicked = $(event.target.parentElement)[0].id;
    playVideo(clicked);
    videoID = clicked + "-video"
})

function playVideo(adminID) {
    var adminVideo = document.getElementById(adminID + "-video");
    var adminPic = document.getElementById(adminID + "-pic");

    adminPic.style.display = "none";
    adminVideo.style.display = "block";
    console.log(window.innerWidth);

    var screenWidth = window.innerWidth;
    var playerWidth;
    var playerHeight;
    if (screenWidth < 400) {
        playerWidth = '350';
        playerHeight = '200';
    } else {
        playerWidth = '640';
        playerHeight = '390';
    }

    if (adminID == "boughton") {
        var player1 = new YT.Player("boughton-video", {
            height: playerHeight,
            width: playerWidth,
            videoId: 'c3Ys663pTnI',
            playerVars: {
                'autoplay': 1,
                'fs': 1
            },
            events: {
                'onReady': onPlayerReady,
            }
        });
    }

    if (adminID == "garlinger") {
        var player2 = new YT.Player("garlinger-video", {
            height: playerHeight,
            width: playerWidth,
            videoId: 'gyN_V9ss7fY',
            playerVars: {
                'autoplay': 1,
                'fs': 1
            },
            events: {
                'onReady': onPlayerReady,
            }
        });
    }

    if (adminID == "zavar") {
        var player3 = new YT.Player("zavar-video", {
            height: playerHeight,
            width: playerWidth,
            videoId: 'SDPd6ufTRHM',
            playerVars: {
                'autoplay': 1,
                'fs': 1
            },
            events: {
                'onReady': onPlayerReady,
            }
        });
    }

    if (adminID == "croll") {
        var player4 = new YT.Player("croll-video", {
            height: playerHeight,
            width: playerWidth,
            videoId: 'F08youaPV8U',
            playerVars: {
                'autoplay': 1,
                'fs': 1
            },
            events: {
                'onReady': onPlayerReady,

            }
        });
    }

    if (adminID == "mccoo") {
        var player5 = new YT.Player("mccoo-video", {
            height: playerHeight,
            width: playerWidth,
            videoId: 'AOLg5IzsSnk',
            playerVars: {
                'autoplay': 1,
                'fs': 1
            },
            events: {
                'onReady': onPlayerReady,

            }
        });
    }

    if (adminID == "kushnir") {
        var player6 = new YT.Player("kushnir-video", {
            height: playerHeight,
            width: playerWidth,
            videoId: '8hGm0LP8qbc',
            playerVars: {
                'autoplay': 1,
                'fs': 1
            },
            events: {
                'onReady': onPlayerReady,

            }
        });
    }

    if (adminID == "cragin") {
        var player7 = new YT.Player("cragin-video", {
            height: playerHeight,
            width: playerWidth,
            videoId: '4xl3JSXg7UY',
            playerVars: {
                'autoplay': 1,
                'fs': 1
            },
            events: {
                'onReady': onPlayerReady,

            }
        });
    }

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
