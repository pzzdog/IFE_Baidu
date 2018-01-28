var suggestData = ['a', 'a', 'abandon', 'abdomen', 'abide', 'ability', 'able', 'abnormal', 'aboard', 'abolish', 'abound', 'about', 'above', 'fiction', 'field', 'fierce', 'fight', 'tell', 'sue'];

var inputArea = $("input");
var ulArea = $("ul");

addInputListener();
click(li);
keydownLi();


function $(selectors) {
    return document.querySelector(selectors);
}

function addInputListener(){
    if (inputArea.addEventListener) {//IE9 Chrome Firefox
        inputArea.addEventListener("input",OnInput);
    }
}

function OnInput(event){
var inputValue=event.target.value;
}
/**
* 处理input数据
* @param {string} inputValue实时输入的字符串
*/

function handleInput(inputValue){
    console.log(inputValue);
    var liString
}