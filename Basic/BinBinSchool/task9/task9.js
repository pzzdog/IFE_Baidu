var display = $("display");
var timer = 0;
var contentS = $("searContent");
var addContent = $("addContent");
var checkContent;


function $(id) { //构造$函数
    return document.getElementById(id);
}

function preSort(content) { //前序遍历
    if (content) {
        showNode(content);
        for (let i = 0; i <= content.childNodes.length - 3; i++) {
            preSort(content.children[i]);
        }
    }
}

function middleSort(content) { //中序遍历
    if (content) {
        middleSort(content.children[0]);
        showNode(content);
        for (let i = 1; i <= content.childNodes.length - 3; i++) {
            middleSort(content.children[i]);
        }
    };
}

function backSort(content) { //后序遍历
    if (content) {
        for (let i = 0; i <= content.childNodes.length - 3; i++) {
            backSort(content.children[i]);
        }
        showNode(content);
    };
}

function searchF(content) { //查询函数
    if (content) {
        showNode2(content);
        for (let i = 0; i <= content.childNodes.length - 4; i++) {
            searchF(content.children[i]);
        }
    }
}

function showNode2(node) { //查找颜色变换
    if (node.innerText.split('\n')[0] == contentS.value) {
        setTimeout(function() {
            node.style.backgroundColor = "#ff0000";
        }, timer += 500);
    } else {
        showNode(node);
    }
}

function showNode(node) { //颜色变换
    clear()
    setTimeout(function() {
        node.style.backgroundColor = "#47A8DE";
    }, timer += 500);
    setTimeout(function() {
        node.style.backgroundColor = "#ffffff";
    }, timer += 500);

}

function clear() { //恢复初始背景色
    var divs = document.getElementsByTagName("div");
    divList = [];
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "white";
    }
}

$("display").onclick = function(e) { //选中显示函数
    clear();
    e.target.style = "background:tomato;";
    checkContent = e.target;
    console.log(checkContent.innerText.split('\n'));
}

function del(delContent) { //删除dom节点
    delContent.parentElement.removeChild(delContent);
}

function add(addCo) { //添加dom节点
    var addDom = document.createElement("div");
    addDom.innerText = addContent.value;
    if (addContent.value) {
        checkContent.parentElement.appendChild(addDom);
    }
}

function init() { // 事件监听
    var front = $("fSort");
    front.onclick = function() {
        preSort(display);
        timer = 0;
    };
    var middle = $("mSort");
    middle.onclick = function() {
        middleSort(display);
        timer = 0;
    };
    var back = $("bSort");
    back.onclick = function() {
        backSort(display);
        timer = 0;
    };
    var searchBtn = $("search");
    searchBtn.onclick = function() {
        searchF(display);
        timer = 0;
    }
    var delBtn = $("del");
    delBtn.onclick = function() {
        del(checkContent);
    }
    var addBtn = $("add");
    addBtn.onclick = function() {
        add(addContent);
    }
};
init();