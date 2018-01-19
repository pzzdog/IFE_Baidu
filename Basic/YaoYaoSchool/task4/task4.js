var block;
var direc;
var command;
var sum = 0;
var ii;
var jj;
var btn = $("btn");

btn.onclick = dirCommand;

/* function */
function $(id) {
    return document.getElementById(id);
}

function dirCommand() { //Based on input command
    block = $("block");
    direc = $("block2");
    command = $("command").value;
    for (let i = 2; i <= 20; i += 2) {
        for (let j = 3; j <= 21; j += 2) {
            if (block.parentNode.parentNode.parentNode.childNodes[i].childNodes[j].innerHTML == block.parentNode.innerHTML) {
                ii = i;
                jj = j;
            }
        }
    }
    switch (command) {
        case "TUN LEF":
            sum += 3;
            break;
        case "TUN RIG":
            sum += 1;
            break;
        case "TUN BAC":
            sum += 2;
            break;
        case "GO":
            switch (sum % 4) {
                case 0:
                    ii -= 2;
                    break;
                case 1:
                    jj += 2;
                    break;
                case 2:
                    ii += 2;
                    break;
                case 3:
                    jj -= 2;
                    break;
            }
            if (2 <= ii && ii <= 20 && 3 <= jj && jj <= 21) {
                block.parentNode.parentNode.parentNode.childNodes[ii].childNodes[jj].innerHTML = block.parentNode.innerHTML;
                block.parentNode.innerHTML = "";
            } else(
                alert("超出范围啦！")
            )
            break;
    }
    switch (sum % 4) { //change direction
        case 0:
            up();
            break;
        case 1:
            right();
            break;
        case 2:
            bottom();
            break;
        case 3:
            left();
            break;
    }
    //TODO: GO
}

function left() { //* @dirCommand
    direc.style = "width:20%;height:100%;";
}

function right() { //* @dirCommand
    direc.style = "width:20%;height:100%;margin-left:80%;";
}

function up() { //* @dirCommand
    direc.style = "width:100%;height:20%;";
}

function bottom() { //* @dirCommand
    direc.style = "width:100%;height:20%;margin-top:80%;";
}