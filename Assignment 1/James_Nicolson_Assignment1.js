var changeP = document.getElementsByClassName('change');
var para = document.getElementsByTagName('p');
var topMiddle = [document.getElementById('top'), document.getElementById('middle')];
var noNHL = document.getElementById('bottom').getElementsByTagName('a');

function mouseOver() {
    this.style.color = "red";
}

function mouseOut() {
    this.style.color = "black";
}

function clicked() {
    if (this.style.border == "1px dashed black") {
        this.style.border = "";
    } else {
        this.style.border = "1px dashed black";
    }
}

function dblClicked() {
    this.style.display = "none";
}

//Each paragraph in the DIVs with class "change" will turn their font colour to red when the mouse is on them, and change back to black when the mouse is off.
for (var i = 0; i < changeP.length; i++) {
    var p = changeP[i].getElementsByTagName('p')
    for (var j = 0; j < p.length; j++) {
        p[j].onmouseover = mouseOver;
        p[j].onmouseout = mouseOut;
    }
}
//Each paragraph on the the page gets a black dashed border when it gets clicked; the border goes away when clicked again. This should work any number of times the paragraph is clicked.
for (var i = 0; i < para.length; i++) {
    para[i].onclick = clicked;
}

//Each image in a DIV whose id is "top" or "middle" gets its display style set to "none" when double clicked.
for (var i = 0; i < topMiddle.length; i++) {
    topMiddle[i].ondblclick = dblClicked;
}

//Each hyperlink in the DIV with id "bottom" should not work if they contain the string "nhl" in their href attribute. There are a few ways to accomplish this, but for this assignment, use **event.preventDefault()**.
for (var i = 0; i < noNHL.length; i++) {
    if (noNHL[i].href.indexOf('nhl') != -1) {
        noNHL[i].onclick = function(e) {
            event.preventDefault();
        }
    }
}
