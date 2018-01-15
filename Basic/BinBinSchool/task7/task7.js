var display = document.getElementById("display");
var timer = 0;

function showNode(node) {
    node.style.backgroundColor = "#fffff";;
    setTimeout(function() {
        node.style.backgroundColor = "#47A8DE";
    }, timer += 500);
    setTimeout(function() {
        node.style.backgroundColor = "#ffffff";
    }, timer += 500);
}

function preSort(content) {
    if (content) {
        showNode(content);
        preSort(content.children[0]);
        preSort(content.children[1]);
    }

}

function middleSort(content) {
    if (content) {
        middleSort(content.children[0]);
        showNode(content);
        middleSort(content.children[1]);
    };


}

// function backSort(content) {
//     if (content.children.length) {
//         backSort(content.children[0]);
//         backSort(content.children[1]);
//     };
//     showNode(content);
// }

function backSort(content) {
    if (content) {
        backSort(content.children[0]);
        backSort(content.children[1]);
        showNode(content);
    };

}

function init() {
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
};
init();
// var front = document.getElementById("fSort");
// front.addEventListener("click", function() {
//     preSort(display);
//     timer = 0;
// }, false)