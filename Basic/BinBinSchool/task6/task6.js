var inPutOri = document.getElementById("input");
var listShow = document.getElementById("list");

function numberInput(inPutOri) {
    if (inPutOri.value == "") {
        alert("请输入内容");
        return false;
    } else {
        return inPutOri.value;
    }
}
/*--input---*/
function inLeft() {
    var inPut = numberInput(inPutOri);
    var li = document.createElement("li");
    if (inPut) {
        li.innerHTML = inPut;
        listShow.insertBefore(li, listShow.firstChild);
    }
}

function inRight() {
    var inPut = numberInput(inPutOri);
    var li = document.createElement("li");
    if (inPut) {
        li.innerHTML = inPut;
        listShow.insertBefore(li, listShow.lastChild);
    }
}
/*--delete---*/
function outLeft() {
    // alert("删除" + "  " + listShow.firstChild.innerHTML);
    listShow.removeChild(listShow.firstChild);
}

function outRight() {
    // alert("删除" + "  " + listShow.lastChild.innerHTML);
    listShow.removeChild(listShow.lastChild);
}

//点击删除功能 function括号中firefox必须加入event而safari与Chrome则可以不加运行
listShow.addEventListener("click", function(event) {
    if (event.target.nodeName.toLowerCase() == "li") {
        listShow.removeChild(event.target);
    }
})

/*--------搜索---------*/

function search() {
    var content = document.getElementById("searchContent");
    if (content.value == "") {
        alert("没有搜索内容，嘤嘤嘤~");
    } else {
        for (let i = 0; i < listShow.childNodes.length; i++) {
            if (listShow.childNodes[i].innerHTML.indexOf(content)) {
                listShow.childNodes[i].style = "color:green;border:solid 1px tomato;";
            }
        }
    }
}




/*--------init---------*/
function init() {
    var btn_inLeft = document.getElementById("inLeft");
    btn_inLeft.onclick = inLeft;
    var btn_inRight = document.getElementById("inRight");
    btn_inRight.onclick = inRight;
    var btn_outLeft = document.getElementById("outLeft");
    btn_outLeft.onclick = outLeft;
    var btn_outRight = document.getElementById("outRight");
    btn_outRight.onclick = outRight;
    var btn_search = document.getElementById("search");
    btn_search.onclick = search;

}

init();