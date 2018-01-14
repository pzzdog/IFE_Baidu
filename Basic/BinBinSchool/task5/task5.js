var inPutOri = document.getElementById("input");
var listShow = document.getElementById("list");


function numberInput(inPutOri) {
    if ((inPutOri.value == "") || (isNaN(inPutOri.value)) || (inPutOri.value > 100) || (inPutOri.value < 10)) {
        alert("请输入10-100数字");
        return false;
    } else {
        return inPutOri.value;
    }
}

/*----input----------------------------*/
function inLeft() { //left input
    var inPut = numberInput(inPutOri);
    var li = document.createElement("li");
    if (inPut) {
        // li.innerHTML = inPut;
        li.style = "background:" + randomColor().toString() + ";" + "height:" + (inPut * 4).toString() + "px;";
        if (listShow.childNodes.length <= 61) {
            listShow.insertBefore(li, listShow.firstChild);
        } else(alert("容量已满"))
    }
}

function inRight() { //right input
    var inPut = numberInput(inPutOri);
    var li = document.createElement("li");
    if (inPut) {
        // li.innerHTML = inPut;
        li.style = "background:" + randomColor().toString() + ";" + "height:" + (inPut * 4).toString() + "px;";
        if (listShow.childNodes.length <= 61) {
            listShow.insertBefore(li, listShow.lastChild);
        } else(alert("容量已满"))
    }
}
/*----------------------------*/

/*--delete------------------*/
function outLeft() {
    listShow.removeChild(listShow.firstChild);
}

function outRight() {
    listShow.removeChild(listShow.lastChild);
}
/*----------------------------*/

/*---functions----------------*/
function randomNum() { //随即生成数据填满
    for (var i = 0; listShow.childNodes.length <= 61; i++) {
        var inPut = parseInt(Math.random() * 91) + 10;
        var li = document.createElement("li");
        li.style = "background:" + randomColor().toString() + ";" + "height:" + (inPut * 4).toString() + "px;";
        listShow.insertBefore(li, listShow.lastChild);
    }
}

function sort() { //排序  不支持右侧插入得重新排序
    for (let i = 0; i < listShow.childNodes.length - 1; i++) {
        for (let j = i + 1; j < listShow.childNodes.length - 1; j++) {
            var a = listShow.childNodes[i].style.height;
            var b = listShow.childNodes[j].style.height;
            if (parseInt(a) >= parseInt(b)) {
                listShow.childNodes[i].style.height = b;
                listShow.childNodes[j].style.height = a;
            }
            console.log(i);
            console.log(j);
        }
    }
}


function randomColor() { //生产随机颜色
    var rand = Math.floor(Math.random() * 0xFFFFFF).toString(16);
    if (rand.length === 6) {
        return "#" + rand;
    } else {
        return randomColor();
    }
}

//点击删除功能 function括号中firefox必须加入event而safari与Chrome则可以不加运行
listShow.addEventListener("click", function(event) {
        if (event.target.nodeName.toLowerCase() == "li") {
            listShow.removeChild(event.target);
        }
    })
    /*------------------------*/

function init() {
    var btn_inLeft = document.getElementById("inLeft");
    var btn_inRight = document.getElementById("inRight");
    var btn_outLeft = document.getElementById("outLeft");
    var btn_outRight = document.getElementById("outRight");
    var btn_random = document.getElementById("random");
    var btn_sort = document.getElementById("sort");
    btn_inLeft.onclick = inLeft;
    btn_inRight.onclick = inRight;
    btn_outLeft.onclick = outLeft;
    btn_outRight.onclick = outRight;
    btn_random.onclick = randomNum;
    btn_sort.onclick = sort;
}
init();