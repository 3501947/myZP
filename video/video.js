(function () {
    var videoPlay = $("#play")
    var videoPause = $("#pause")
    var zmvideobovolSvg1 = $(".zm-video-bottom-vol .svg1")
    var zmvideobovolSvg2 = $(".zm-video-bottom-vol .svg2")
    var zmplaybtnSvg = $(".zm-playbtnsvg")
    //视频播放功能
    //播放暂停按钮
    var flag = true;
    videoPlay.on("click", function () {
        if (flag) {
            $(this).css("display", "none").siblings("#pause").css("display", "block")
            $(".zm_addmvbox video").get(0).play()
            zmplaybtnSvg.css("display", "none")
            $(".zm-pausebtnsvg").css("display", "block")
        }
        return false;
    })
    videoPause.on("click", function () {
        if (flag) {
            $(this).css("display", "none").siblings("#play").css("display", "block")
            $(".zm_addmvbox video").get(0).pause()
            zmplaybtnSvg.css("display", "block")
            $(".zm-pausebtnsvg").css("display", "none")
        }
        return false;
    })

    //播放器大播放暂停按钮
    zmplaybtnSvg.on("click", function () {
        videoPlay.click()
        $(".zm-pausebtnsvg").css("display", "block")
    })
    $(".zm-pausebtnsvg").on("click", function () {
        videoPause.click()
        zmplaybtnSvg.css("display", "block")
    })

    //  zm-pausebtnsvg  

    //点击按钮全屏事件
    var full = document.querySelector(".zm-video-bottom-enl")
    var video = document.querySelector(".zm-video")
    full.onclick = function () {
        video.webkitRequestFullScreen()
    }
    //进度条的事件
    var elem = document.querySelector('.js-min-max-start'); //选择input元素
    var init = new Powerange(elem, {
        min: 0,
        max: 100,
        start: 0,
        hideRange: true,
        step: 1
    });
    //实例化powerange类并且初始化参数
    $("input").change(function () {
        if ($(this).val() == 100) {

        }
    })
    //进度条位置改变同步视频
    $(".js-min-max-start").change(function () {
        video.currentTime = $(this).val() / 100 * video.duration
    })

    //视频播放同步进度条位置
    video.ontimeupdate = function () {
        var circleLeft = video.currentTime / video.duration * 410;
        $(".zm-video-bottom-pro .range-handle").css("left", circleLeft)
        $(".zm-video-bottom-pro .range-quantity").css("width", circleLeft + 1)
        if ($(".range-handle").css("left") == '410px') {
            videoPlay.css("display", "block")
            videoPause.css("display", "none")
            zmplaybtnSvg.css("display", "block")
            $(".zm-pausebtnsvg").css("display", "none")
        }
    }
    //音量播放
    zmvideobovolSvg2.css({
        "display": "none"
    })
    var ele = document.querySelector('.js-min-max-clo'); //选择input元素
    var ini = new Powerange(ele, {
        min: 0,
        max: 100,
        start: 0,
        hideRange: true,
        step: 1,
        vertical: true
    }); //实例化powerange类并且初始化参数
    //拖拽进度条改变音量大小
    $(".js-min-max-clo").change(function () {
        video.volume = $(this).val() / 100
        if (video.volume == 0) {
            zmvideobovolSvg1.css("display", "none")
            zmvideobovolSvg2.css("display", "block")
        } else {
            zmvideobovolSvg1.css("display", "block")
            zmvideobovolSvg2.css("display", "none")
        }
    })
    $(".range-handle").on("click", function (e) {
        // 阻止事件冒泡
        e.stopPropagation();
    })
    // 点击小喇叭的时候直接静音
    var flag2 = true;
    $(".zm-video-bottom-vol svg").on("click", function () {
        if (flag2) {
            flag2 = false;
            video.volume = 0;
            // $(".js-min-max-clo").val("0");
            $(".zm-video-bottom-bgc .range-handle").css("bottom", 0)
            $(".zm-video-bottom-bgc .range-quantity").css("height", 0)
            zmvideobovolSvg1.css("display", "none")
            zmvideobovolSvg2.css("display", "block")
        } else {
            flag2 = true;
            video.volume = 1;
            $(".zm-video-bottom-bgc .range-handle").css("bottom", 82)
            $(".zm-video-bottom-bgc .range-quantity").css("height", 82)
            zmvideobovolSvg1.css("display", "block")
            zmvideobovolSvg2.css("display", "none")
        }
        return false;
    })

    //闪烁事件  
    var video_bottom = $(".zm-video-bottom");
    video_bottom.hide();
    $(".zm_addmvbox").on("mouseover", function () {
        video_bottom.show();
    })
    $(".zm_addmvbox").on("mouseout", function () {
        video_bottom.hide();
    })
})();