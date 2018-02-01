window.onload = function () { //监听事件
    var textContent = document.getElementsByTagName("textarea")[0];
    var mdContent = document.getElementById("dis-text");
    textContent.oninput = function (e) {
        mdContent.innerHTML = markdownParse(e.target.value);
    }
}

function markdownParse(str) {
    var mdText = "";
    var textLines = str.split('\n');
    var reader = {
        index: 0,
        saved: 0,
        length: textLines.length,
        read: function () {
            if (!this.eof()) {
                return;
            }
            return lines[this.index++];
        },
        nextLine: function () {
            return textLines[this.index];
        },
        eof: function () {
            return this.index < this.length;
        }

    };


    while (reader.eof()) {
        var line = reader.read();
        var temp=line;

        if (line==="") {//空行
            mdText+="\n";
            continue;
        }

        var pReg=/^([\u4e00-\u9fa5_a-zA-z0-9\s]*)(:?\n|$)/;
        if(pReg.test(line)){
            function parseP(pReg,line){
                return line.replace(pReg,function(match,g1){
                    return "<p>"+g1+"</p>";
                })
            }
            temp=parseP(pReg,line);
        }





    }

    return mdText;
}