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
    command = $("command").value;
    direc = $("block2");

    for (let i = 2; i <= 20; i += 2) {
        for (let j = 3; j <= 21; j += 2) {
            if (block.parentNode.parentNode.parentNode.childNodes[i].childNodes[j].innerHTML == block.parentNode.innerHTML) {  //获取原始的位置，ii代表列，jj代表行
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
            break;
        case "MOV LEF":
            sum = 3;
            jj -= 2;
            break;
        case "MOV TOP":
            sum = 0;
            ii -= 2;
            break;
        case "MOV RIG":
            sum = 1;
            jj += 2;
            break;
        case "MOV BOT":
            sum = 2;
            ii += 2;
            break;
        case "TRA LEF":
            jj -= 2;
            break;
        case "TRA TOP":
            ii -= 2;
            break;
        case "TRA RIG":
            jj += 2;
            break;
        case "TRA BOT":
            ii += 2;
            break;
    }

    switch (sum % 4) { //direction
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

    if (2 > ii || ii > 20 || 3 > jj || jj > 21) { //确定命令执行后的命令
        console.log(1);}
         else {
            block.parentNode.parentNode.parentNode.childNodes[ii].childNodes[jj].innerHTML = block.parentNode.innerHTML;
            block.parentNode.innerHTML="";
        }
    }



function left() { //* @dirCommand
    block.style = "transform:rotate(-90deg);";
}

function right() { //* @dirCommand
    block.style.transform = "rotate(90deg)";
}

function up() { //* @dirCommand
    block.style.transform = "rotate(0deg)";
}

function bottom() { //* @dirCommand
    block.style.transform = "rotate(180deg)";
}