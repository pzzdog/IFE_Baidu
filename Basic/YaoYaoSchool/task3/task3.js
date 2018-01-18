/* variable */
var list1 = document.getElementsByClassName("list1");
var list2 = document.getElementsByClassName("list2");
var list3 = document.getElementsByClassName("list3");
console.log($("university").childNodes[1].style);
/* select change */
$("city").onchange = function () {
    var a = $("city").selectedIndex;
    switch (a) {
        case 0:
            $("university").innerHTML = "<option>北京大学</option><option> 清华大学 </option>";
            break;
        case 1:
            $("university").innerHTML = "<option>南京大学</option><option>东南大学</option>";
            break;
        case 2:
            $("university").innerHTML = "<option>武汉大学</option>";
            break;
    }
}

/* display change */
$("studentIn").onchange = function () {
    $("company").style = "display:none;"
    $("school").style = "display:flex;display:-webkit-flex;";
}

$("studentOut").onchange = function () {
    $("company").style = "display:flex;display:-webkit-flex;"
    $("school").style = "display:none;";
}

/* function*/
function $(id) {
    return document.getElementById(id);
}