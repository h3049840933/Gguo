var str = '';
var data = [];
window.onload = function () {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax.open('get', 'http://127.0.0.1:3000/useing/master');
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                data = JSON.parse(ajax.responseText);
                console.log(data);
                showData();
            }
            else {
                console.log('加载失败');
            }
        }
    }
}


function showData() {
    var shuju = document.getElementsByTagName('dl')[0];
    for (var item of data) {
        str = `<dt>
        <a href="#">
        <div class="shoufa"><a>${item.info_ty}</a></div>
        <img src=${item.img} width="220" height="130">
        <div class="hot-con">
           <h2 class="name">${item.text}</h2>
           <p class="tabs">
                <span><a>${item.totalnum}</a></span>
                <span><a>${item.num}</a></span>
           </p>
           <p class="sq">
                <span>${item.apply}</span>申请
           </p>
           <p class="current">报告数量:8</p>
        </div>
        </a>
        </dt>`
        console.log(str);
        shuju.innerHTML += str;
    }
}
showData();