var fullname = $("fullname");
var password = $("password");
var psw = $("psw");
var email = $("email");
var phone = $("telNum");
var submit = $("submit");
var sum = 0;

// input
fullname.onfocus = function () {
    focu(fullname, "必填，长度为4-16个字符。");
}
fullname.onblur = function () {
    check(fullname);
}

// password
password.onfocus = function () {
    focu(password, "必填，长度为4-16个英文字符。");
}
password.onblur = function () {
    check(password);
}

// password2
psw.onfocus = function () {
    focu(psw, "请再次输入密码。");
}
psw.onblur = function () {
    if (password.value === psw.value) {
        psw.parentNode.childNodes[3].innerHTML = "密码一致";
        psw.parentNode.childNodes[3].style.color = "green";
        psw.style = "border:solid 1px green;";
        sum += 1;
    } else {
        psw.parentNode.childNodes[3].innerHTML = "两次输入密码不一致";
        psw.parentNode.childNodes[3].style.color = "red";
        psw.style = "border:solid 1px red;";
        sum *= 0;
    }
}

// email
email.onfocus = function () {
    focu(email, "请输入邮箱(xx@yy.zz)。");
}
email.onblur = function () {
    var reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (reg.test(email.value)) {
        email.parentNode.childNodes[3].innerHTML = "邮箱格式正确";
        email.parentNode.childNodes[3].style.color = "green";
        email.style = "border:solid 1px green;";
        sum += 1;
    } else {
        email.parentNode.childNodes[3].innerHTML = "邮箱格式错误";
        email.parentNode.childNodes[3].style.color = "red";
        email.style = "border:solid 1px red;";
        sum *= 0;
    }
}

//phone
phone.onfocus = function () {
    focu(phone, "请输入手机号码（列如：18888888888）");
}
phone.onblur = function () {
    var reg = /^1[34578]\d{9}$/;
    if (reg.test(phone.value)) {
        phone.parentNode.childNodes[3].innerHTML = "输入完成";
        phone.parentNode.childNodes[3].style.color = "green";
        phone.style = "border:solid 1px green;";
        sum += 1;
    } else {
        phone.parentNode.childNodes[3].innerHTML = "这不是个手机号码";
        phone.parentNode.childNodes[3].style.color = "red";
        phone.style = "border:solid 1px red;";
        sum *= 0;
    }
}
//submit
submit.onclick = function () {
    if (sum == 0) {
        alert("注册信息有误，请检查。");
    } else {
        alert("注册信息输入完毕");
    }
}


/*functions*/
function $(id) {
    return document.getElementById(id);
}


function check(dot) {
    var nameContent = dot.value;
    var count = 0;
    for (let i = 0; i < nameContent.length; i++) {
        if (nameContent.charCodeAt(i) >= 0 && nameContent.charCodeAt(i) <= 0xff) {
            count += 1;
        } else {
            count += 2;
        }
    }
    if (count >= 4 && count <= 16) {
        dot.parentNode.childNodes[3].innerHTML = "输入正确";
        dot.parentNode.childNodes[3].style.color = "green";
        dot.style = "border:solid 1px green;";
        sum += 1;
    } else if (count == 0) {
        dot.parentNode.childNodes[3].innerHTML = "不能为空";
        dot.parentNode.childNodes[3].style.color = "red";
        dot.style = "border:solid 1px red;";
        sum *= 0;
    } else {
        dot.parentNode.childNodes[3].innerHTML = "格式有误";
        dot.parentNode.childNodes[3].style.color = "red";
        dot.style = "border:solid 1px red;";
        sum *= 0;
    }
}

function focu(dom, display) {
    dom.parentNode.childNodes[3].innerHTML = display;
    dom.parentNode.childNodes[3].style = "color:#748b83;font-size:12px;"
}