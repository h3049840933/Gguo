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

var btn = document.getElementById('sumbit');
var tel = document.querySelector('.tel');
var imgCode = document.querySelector('.imgCode');
var psw = document.querySelector('.password');
var rePsw = document.querySelector('.rePsw');
var ipt = document.getElementsByTagName('input');

btn.onclick = function () {
    if (/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(tel.value)) {
        if (imgCode.value == 'r2b7') {
            if (psw.value == rePsw.value) {
                window.location.href = "index.html";
                for (var i in ipt) {
                    ipt[i].value = '';
                }
            } else {
                alert('两次输入的密码不一样')
            }
        } else {
            alert('图片验证码错误')
        }
    } else {
        alert('请输入正确的手机号')
    }
}
