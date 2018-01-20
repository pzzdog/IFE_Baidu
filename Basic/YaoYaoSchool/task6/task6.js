var swidth = $("swidth"); //window width
var sheight = $("sheight"); //window height
var showSur = $("showSur"); //click to show

var surfloat = $("surfloat"); //show window
var surback = $("surback"); //show background


showSur.onclick = showSurface;
surback.onclick = clearSurface;
surfloat.onmousedown=dragMov;

/* functions */
function $(idStr) { //get object through id 
    return document.getElementById(idStr);
}

function showSurface() { //显示浮出层
    surfloat.style = "display:block;width:" + swidth.value + "px;height:" + sheight.value + "px;" +
        "margin-left:-" + swidth.value/2 + "px;margin-top:-" + sheight.value/2 + "px;";
    surback.style.display = "block";
}

function clearSurface() { //清除浮出层
    surfloat.style = "display:none";
    surback.style.display = "none";
}

function dragMov(ev) {//拖拽
    var e = ev || window.ev,
        sx = e.clientX,
        sy = e.clientY,
        fx = sx - surfloat.offsetLeft,
        fy = sy - surfloat.offsetTop;
    document.onmousemove = function (ev) {
        var l = ev.clientX - fx,
            t = ev.clientY - fy;
        surfloat.style.left = l +swidth.value/2 + "px";
        surfloat.style.top = t +sheight.value/2 + "px";
    };
    surfloat.onmouseup = function () {//注销
        document.onmousemove = null;
        surfloat.onmouseup = null;
    }
};