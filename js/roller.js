$(init)

function init() {
    let currentIndex = 0; // 当前index
    // let list = $('.list') [0].getElementsByTagName('li'); // list数组
    // let list = $('ul').childNodes;
    let listLength = $("ul > li").length;   // list长度
    // 定时器2.5秒后自动变化
    let timer = setInterval(() => {
        // 调用变换处理函数
        changeTo();
    }, 5000);

    // 变化处理函数
    function changeTo() {
        // let currentItem = $('li')[num];
        console.log($('li').eq(currentIndex), currentIndex,  99)
        fadeOut($('li').eq(currentIndex));   // 淡出当前
    }

    // 淡出当前内容
    function fadeOut(el) {
        for (let i = 0; i <= 20; i++) {  // 透明度改变 20*5=100
            (function () {
                let level = 100 - i * 5; // 透明度每次变化值
                setTimeout(function () {
                    setOpacity(el, level)
                }, i * 200); // i*25 表示每次改变透明度的时间间隔，自行设定
            })(i);  // 每次循环变化一次
        }
        currentIndex = (currentIndex + 1) % listLength;
        fadeIn($('ul').eq(currentIndex));
    }

    // 设置透明度
    function setOpacity(el, level) {
        // if (el.filters) {
        //     el.style.filter = "alpha(opacity=" + level + ")";
        // } else {
            el.css("opacity", level / 100);
            // el.style.opacity = level / 100;
        // }
        // console.log(level/100, 88)
    }

    // 淡入处理函数
    function fadeIn(el) {
        // setOpacity(el, 0);  // 初始化为全透明
        for (let i = 0; i <= 20; i++) { // 透明度改变20 * 5 = 100
            (function () {
                let level = i * 5; // 透明度每次变化值
                setTimeout(() => {
                    setOpacity(el, level)
                }, i * 200)   // i * 25 每次改变透明度的时间间隔
            })(i); // 每次循环变化一次
        }
    }
}
