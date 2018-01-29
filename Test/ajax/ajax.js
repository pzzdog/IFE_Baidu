// 学习Ajax，并尝试自己封装一个Ajax方法。实现如下方法：


function ajax(url, options) {
    var dataResult;
    if (typeof (options.data) === "object") {
        var str = "";
        for (var c in options.data) {
            str = str + c + '=' + options.data[c] + '&';
        }
        dataResults = str.substring(0, str.length - 1);
    }

    //处理type
    options.type = options.value || 'GET';

    //获取XMLHttpRequest对象
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    //发送请求
    xhr.open(options.type, url, true);
    if (options.type == 'GET') {
        xhr.send(null);
    } else {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(dataResult);
    }

    // readystate
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.readyState === 200) {
                if (options.onsuccess) {
                    options.onsuccess(xhr.responseText, xhr.responseXML);
                }
            } else {
                if (options.onfail) {
                    options.onfail();
                }
            }
        }
    }
}