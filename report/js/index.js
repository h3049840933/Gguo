(function () {
    var tabs = document.getElementsByClassName('play-nav')[0].children;
    var items = document.getElementsByClassName('left');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute('index', i);
        tabs[i].onclick = function () {
            var index = this.getAttribute('index');
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].className = '';
                tabs[index].className = 'active';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
                items[index].style.display = 'block';
            }
        }
    }
})();

var data;
function getData() {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax.open('get', 'http://127.0.0.1:3000/report/new');
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                data = JSON.parse(ajax.responseText);
            }
        }
    }
}

window.onload = getData();

function showData() {
    var new_ = document.querySelector('.newInfo');
    var hot_ = document.querySelector('.hotInfo');
    // console.log(new_, hot_);
    var str1;
    var str2;
    for (var i = 0; i < data.length; i++) {
        if (i >= 0 && i < 6) {
            str1 = ` <li>
            <a href="#">
                <img src="${data[i].img}" width="700" height="412" alt="">
                <div class="info">
                    <p class="title">${data[i].text}</p>
                    <div class="btm">
                        <div class="userInfo">
                            <span class="name">${data[i].uName}</span>
                            <span class="time">${data[i].endTime}</span>
                        </div>
                        <div class="icon">
                            <span class="zan">3</span>
                            <span class="look">3</span>
                        </div>
                    </div>
                </div>
            </a>
        </li>`
            new_.innerHTML += str1;
        }
        if (i >= 6 && i < 12) {
            str2 = ` <li>
            <a href="#">
                <img src="${data[i].img}" width="700" height="412" alt="">
                <div class="info">
                    <p class="title">${data[i].text}</p>
                    <div class="btm">
                        <div class="userInfo">
                            <span class="name">${data[i].uName}</span>
                            <span class="time">${data[i].endTime}</span>
                        </div>
                        <div class="icon">
                            <span class="zan">3</span>
                            <span class="look">3</span>
                        </div>
                    </div>
                </div>
            </a>
        </li>`
            hot_.innerHTML += str2;
        }
    }
}
setTimeout(showData, 500);



