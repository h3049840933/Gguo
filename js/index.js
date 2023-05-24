<<<<<<< HEAD
var str = '';
var data = [];
window.onload = function () {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
=======

var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var data;
(function () {
    let ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
>>>>>>> 5fa3edf28e1c344acb836c331ccc2c12fe58f724
    ajax.open('get', 'http://127.0.0.1:3000/useing/public');
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                data = JSON.parse(ajax.responseText);
<<<<<<< HEAD
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
=======
            }
        }
    }
})()

function showData() {
    var str = '';
    let itemLists = document.getElementsByClassName('itemList');
    for (let i in data) {
        if (i >= 0 && i < 4) {
            let str = `<li class="item">
            <a href="./use/detail.html">
                <span class="top shoufa">${data[i].info_ty}</span>
                <img src="${data[i].img}" alt="">
                <div class="hot-con">
                    <h2 class="name">${data[i].text}</h2>
                    <p class="tabs red">
                        <span>2032</span>
                        <span>20台</span>
                    </p>
                    <p class="sq">
                        <span>1392</span>
                        申请
                    </p>
                    <p class="current red">剩余时间2天</p>
                </div>
            </a>
        </li>`
            itemLists[0].innerHTML += str;
            itemLists[1].innerHTML += str;
            itemLists[4].innerHTML += str;
        }

        if (i >= 4 && i < 8) {
            let str = `<li class="item">
            <a href="./use/detail.html">
                <span class="top shoufa">${data[i].info_ty}</span>
                <img src="${data[i].img}" alt="">
                <div class="hot-con">
                    <h2 class="name">${data[i].text}</h2>
                    <p class="tabs red">
                        <span>2032</span>
                        <span>20台</span>
                    </p>
                    <p class="sq">
                        <span>1392</span>
                        申请
                    </p>
                    <p class="current red">剩余时间2天</p>
                </div>
            </a>
        </li>`
            itemLists[2].innerHTML += str;
        }

        if (i >= 8 && i < 12) {
            let str = `<li class="item">
            <a href="./use/detail.html">
                <span class="top shoufa">${data[i].info_ty}</span>
                <img src="${data[i].img}" alt="">
                <div class="hot-con">
                    <h2 class="name">${data[i].text}</h2>
                    <p class="tabs red">
                        <span>2032</span>
                        <span>20台</span>
                    </p>
                    <p class="sq">
                        <span>1392</span>
                        申请
                    </p>
                    <p class="current red">剩余时间2天</p>
                </div>
            </a>
        </li>`
            itemLists[3].innerHTML += str;
        }
    }
}

setTimeout(showData, 500);

>>>>>>> 5fa3edf28e1c344acb836c331ccc2c12fe58f724
