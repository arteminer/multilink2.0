document.addEventListener('DOMContentLoaded', function() {
    let videoContainer = document.getElementById('repomp4-container');
    let videoPlayer = document.getElementById('repomp4');
    let playButton = document.querySelector('.ilove');
    let text = document.querySelector('.question')

    let videoPlay = false

    playButton.addEventListener('click', function(e) {
        if (videoPlay === false){
            videoContainer.style.display = 'flex';
            text.style.display = 'none';
            videoPlayer.play();
            videoPlay = true;
        }
        else{
            videoPlayer.pause();
            videoContainer.style.display = 'none';
            text.style.display = 'flex';
            videoPlay = false;
        }
    });

    videoPlayer.addEventListener('ended', function() {
        videoContainer.style.display = 'none';
        text.style.display = 'flex';
    });

    console.log(width)
});