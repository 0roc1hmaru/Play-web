window.onload = function anyDoing() {

    function showBannerLogin() {
        var video = document.getElementById("videoPlay");
        var banner = document.getElementById('showBanner');
        /*video.onclick = function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}*/
        video.addEventListener("canplay", function () {
            setTimeout(function () {
                video.pause();
//                video.style.display = "none";
 //                banner.style.display = "block";

            }, 5000);
        });
    };
    showBannerLogin();


};