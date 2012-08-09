$(function () {
    var keepedVideoTime,
        videoPlayer = _V_("video");

    if (videoPlayer) {
        $('button#keep').on('click', function () {
            keepedVideoTime = videoPlayer.currentTime();
        });
        $('button#seek').on('click', function () {
            videoPlayer.pause();
            videoPlayer.currentTime(keepedVideoTime);
            videoPlayer.play();
            $(videoPlayer.controlBar.el).fadeOut(); // Fix missed event problem
        });
    }
});



