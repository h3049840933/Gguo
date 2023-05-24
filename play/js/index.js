
var dith = document.getElementsByClassName('dith')[0];
// console.log(dith);
var num = [];
var ajaxc = new XMLHttpRequest() || new ActiveXObject('Microsoft,XMLHTTP');
ajaxc.open('get', 'http://127.0.0.1:3000/play/new');
ajaxc.send();
ajaxc.onreadystatechange = function () {

    if (ajaxc.readyState == 4) {
        if (ajaxc.status == 200) {
            var data = ajaxc.responseText;
            num = JSON.parse(ajaxc.responseText);
            // var date = JSON.parse(ajaxc.responseText);
            // console.log(data);
            // console.log(num);
            var str = '';
            for (var item of num) {
                console.log(item);
                for (var itemChild of item) {
                    console.log(itemChild);
                }

                str += `
                <li>
                <a>
                    <img src=${itemChild.img} alt="">
                </a>

                <p>${itemChild.text}
                    <span>${itemChild.description}</span>
                </p>


                <div class="asd">
                    <span>${itemChild.price}</span>
                    <span>${itemChild.like}</span>
                    <span>${itemChild.words}</span>
                </div>
            </li>`
                console.log(str);
                dith.innerHTML += str;

            }

        } else {
            console.log('请求失败');
        }
    }
}
