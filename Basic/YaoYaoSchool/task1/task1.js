var allBody = $("sectionOne");
var check = $("check");

console.log(label.innerHTML);

function init() {

    check.onclick = btn;

}

function $(id) {
    return document.getElementById(id);
}

function btn() {
    var name = $("name");
    var label = $("label");
    var nameContent = name.value;
    var count = 0;
    for (let i = 0; i < nameContent.length; i++) {
        if (nameContent.charCodeAt(i) >= 0 && nameContent.charCodeAt(i) <= 0xff) {
            count += 1;
        } else {
            count += 2;
        }
    }
    if (count >= 4 && count <= 16) {
        label.innerHTML = "输入正确";
        label.style.color = "green";
        name.style = "border:solid 1px green;";
    } else {
        label.innerHTML = "格式有误";
        label.style.color = "red";
        name.style = "border:solid 1px red;";
    }

}

init();