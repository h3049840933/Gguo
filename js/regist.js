var code_ = document.getElementsByClassName('getCode')[0];
var timer;
var index = 60;
code_.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        var str = `${index}秒后重新发送`;
        code_.innerHTML = str;
        index--;
        if (index == -1) {
            clearInterval(timer);
            index = 60;
            str = '获取验证码';
            code_.innerHTML = str;
        }
    }, 1000)
}