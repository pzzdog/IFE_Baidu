var nameIn = $("nameIn");
var scoreC = $("scoreC");
var scoreM = $("scoreM");
var scoreE = $("scoreE");
var checkIn = $("checkIn");
var sortTab = tagClass("sortTab");
var sortUp = tagClass("sortUp");
var sortDown = tagClass("sortDown");
var tbodyy = $("display");

/* 运行主函数 */

checkIn.onclick = contentIn;
init();

/* --------------function------------ */
function $(id) {
    return document.getElementById(id);
}

function tagClass(tagClass) {
    return document.getElementsByClassName(tagClass);
}

function contentIn() { //输入一组成绩
    if (!(nameIn.value || scoreC.value || scoreC.value || scoreC.value)) {
        alert('输入不能为空')
    } else {
        var allScore = parseInt(scoreC.value) + parseInt(scoreE.value) + parseInt(scoreM.value);
        tbodyy.innerHTML += `<tr><td>${nameIn.value}</td><td>${scoreC.value}</td><td>${scoreM.value}</td><td>${scoreE.value}</td><td>${allScore}</td></tr>`;
    }
}

/* -----排序---- */
function init() { //事件监听
    for (let i = 0; i < 4; i++) {
        sortUp[i].onclick = function () {
            sortfUp(i)
        };
        sortDown[i].onclick = function () {
            sortfDown(i)
        };
    }
}


function sortfUp(ii) { //顺序排序
    function compareArr(value1, value2) { //顺序因子
        return value1[ii + 1].innerHTML - value2[ii + 1].innerHTML;
    }
    sortFun(ii, compareArr);
}

function sortfDown(ii) { //倒序排序
    function compareArr(value1, value2) { //倒序因子
        return value2[ii + 1].innerHTML - value1[ii + 1].innerHTML;
    }
    sortFun(ii, compareArr);
}


function sortFun(ii, compareArr) { //排序函数  compareArr排序参数
    let jj = document.getElementsByTagName("tr").length;
    let contentArray = [];
    let tbodyy2 = "";
    for (let i = 1; i < jj; i++) {
        contentArray.push(Array.from(document.getElementsByTagName("tr")[i].getElementsByTagName("td")));
    };

    contentArray.sort(compareArr);
    for (let i = 0; i < jj - 1; i++) {
        tbodyy2 += "<tr>" + "<td>" + contentArray[i][0].innerText + "</td>" + "<td>" + contentArray[i][1].innerText + "</td>" + "<td>" + contentArray[i][2].innerText + "</td>" + "<td>" + contentArray[i][3].innerText + "</td>" + "<td>" + contentArray[i][4].innerText + "</td>" + "</tr>";
    }

    tbodyy.innerHTML = tbodyy2;
}