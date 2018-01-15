var display = document.getElementById("display");
var timer = 0;
var contentS = document.getElementById("searContent");

function searchF(content) { //查询函数
    if (content) {
        showNode2(content);
        for (let i = 0; i <= content.childNodes.length - 3; i++) {
            searchF(content.children[i]);
        }

    }
}

function showNode2(node) { //查找颜色变换
    if (node.innerText.indexOf(parseInt(contentS.value)) === 0) {
        setTimeout(function() {
            node.style.backgroundColor = "#ff0000";
        }, timer += 500);
    } else {
        setTimeout(function() {
            node.style.backgroundColor = "#47A8DE";
        }, timer += 500);
        setTimeout(function() {
            node.style.backgroundColor = "#ffffff";
        }, timer += 500);
    }
}

function showNode(node) { //颜色变换
    node.style.backgroundColor = "#ffffff";
    setTimeout(function() {
        node.style.backgroundColor = "#47A8DE";
    }, timer += 500);
    setTimeout(function() {
        node.style.backgroundColor = "#ffffff";
    }, timer += 500);

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


function init() { // 事件监听
    var front = document.getElementById("fSort");
    front.onclick = function() {
        preSort(display);
        timer = 0;
    };
    var middle = document.getElementById("mSort");
    middle.onclick = function() {
        middleSort(display);
        timer = 0;
    };
    var back = document.getElementById("bSort");
    back.onclick = function() {
        backSort(display);
        timer = 0;
    };
    var search = document.getElementById("search");
    search.onclick = function() {
        searchF(display);
        timer = 0;
    }
};
init();
// var front = document.getElementById("fSort");
// front.addEventListener("click", function() {
//     preSort(display);
//     timer = 0;
// }, false)

// var a = document.getElementById("2");
// console.log(a.innerText.indexOf(parseInt(contentS.value)));