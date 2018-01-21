var nameIn = $("nameIn");
var scoreC = $("scoreC");
var scoreM = $("scoreM");
var scoreE = $("scoreE");
var checkIn = $("checkIn");
var sortTab = tagClass("sortTab");
var sortUp = tagClass("sortUp");
var sortDown = tagClass("sortDown");
var tbodyy = $("display");

console.log(sortTab[0].parentNode.textContent.indexOf("语文"));

console.log((sortTab[0].parentNode.textContent.split(0, 1)));
// ["语文","数学","英语","总分"].indexOf



checkIn.onclick=contentIn;

/* function */
function $(id) {
    return document.getElementById(id);
}

function tagClass(tagClass) {
    return document.getElementsByClassName(tagClass);
}

function contentIn() {//输入一组成绩
    console.log(nameIn.value);
    console.log(scoreC.value);
    console.log(scoreE.value);
    console.log(scoreM.value);
    var inputCon = nameIn.value + scoreC.value + scoreE.value + scoreM.value;
    if (!(nameIn.value||scoreC.value||scoreC.value||scoreC.value)) {
        alert('输入不能为空')
    } else {
        var allScore=parseInt(scoreC.value) + parseInt(scoreE.value)  + parseInt(scoreM.value) ;
        tbodyy.innerHTML += `<tr><td>${nameIn.value}</td><td>${scoreC.value}</td><td>${scoreE.value}</td><td>${scoreM.value}</td><td>${allScore}</td></tr>`;
    }
}