<!-- 随机动漫壁纸 -->
<!-- <div id="body-background-1" class="body-background"></div>
<div id="body-background-2" class="body-background"></div>
<script>
    var ua = navigator.userAgent
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
    var isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
    var isAndroid = ua.match(/(Android)\s+([\d.]+)/)
    var isMobile = isIphone || isAndroid

    // if (false) {
    if (!isMobile) {
        
        const IMG_URL = 'https://api.btstu.cn/sjbz/?lx=dongman&format=json'// 随机壁纸接口
        const DELAY = 10000// 壁纸切换延迟 ms

        var curImgUrl = ''// 当前正在显示的壁纸
        var nextImgUrl = ''// 提前网络加载的下一张壁纸
        var opacity = 1.0// 透明度，越低越看不见图片
        var flag = 0

        // 两张背景淡入淡出切换
        function fadeBackground() {
            $("#body-background-1").css("opacity", flag? opacity : "0")
            $("#body-background-2").css("opacity", flag? "0" : opacity)
            flag = +!flag

            curImgUrl = nextImgUrl
            $("#tool-download-wallpaper").attr("href", curImgUrl)
        }

        // 提前预加载另一张图片
        function preloadBackground() {
            $.ajax({
                url: IMG_URL,
                method: 'get',
                success: function(res) {
                    nextImgUrl = res.imgurl
                    if (flag == 0) {
                        $("#body-background-2").css("background", "url(" + nextImgUrl + ") 0% 0% / 100% 100% no-repeat")
                    } else {
                        $("#body-background-1").css("background", "url(" + nextImgUrl + ") 0% 0% / 100% 100% no-repeat")
                    }
                }
            })
        }

        var bg_interval_1 = setInterval(fadeBackground, DELAY)
        var bg_interval_2
        var bg_timeout = setTimeout(function() {
            bg_interval_2 = setInterval(preloadBackground, DELAY)
            preloadBackground()
        }, DELAY / 2)

        // 第一次一打开加载第一张图
        $(function() {
            $.ajax({
                url: IMG_URL,
                method: 'get',
                success: function(res) {
                    nextImgUrl = res.imgurl
                    $("#body-background-1").css("background", "url(" + nextImgUrl + ") 0% 0% / 100% 100% no-repeat")
                    $("#body-background-1").css("opacity", opacity)
                    $("#body-background-2").css("opacity", "0")

                    curImgUrl = nextImgUrl
                    $("#tool-download-wallpaper").attr("href", curImgUrl)
                }
            })
        })

        // 省流量，标签进入后台后，停止背景的加载
        document.addEventListener('visibilitychange', function() {
            // 先清掉之前的计时，防止触发多次导致切换背景变快
            for (i = 0; i < 3; i++) {
                clearInterval(bg_interval_1)
                clearInterval(bg_interval_2)
                clearTimeout(bg_timeout)
            }

            var isHidden = document.hidden
            if (!isHidden) {
                // 从后台回来后，重新加载背景
                bg_interval_1 = setInterval(fadeBackground, DELAY)
                bg_timeout = setTimeout(function() {
                    bg_interval_2 = setInterval(preloadBackground, DELAY)
                    preloadBackground()
                }, DELAY / 2)
            }
        })
    }
</script> -->