var testPhone = $("testPhone");
var testStr = $("testStr");

testPhone.onclick = phoneFun;
testStr.onclick = strFun;


/* function */
function $(elementId) { //id selector
    return document.getElementById(elementId);
}

function phoneFun() { //phone number test
    if ((/^1[3-9]\d{9}$/).test(parseInt($("phoneNum").value))) {
        alert('Yes');
    } else {
        alert("Try again");
    }
}

function strFun() {
    if ((/\b([a-zA-Z]+)\s+\1\b/).test($("stringStr").value)) {
        alert('Try again');
    } else {
        alert('Yes');
    }
}