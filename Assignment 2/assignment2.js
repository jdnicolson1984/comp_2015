// //JAMES NICOLSON
var body = document.getElementsByTagName('body')[0];
body.ondblclick = initialise;

var width = window.innerWidth;
var imgDiv = document.createElement('div');
var imagesAE = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpeg'];

var inputF = document.createElement('input');
inputF.type = "button";
inputF.value = "Submit"
inputF.id = 'input'

var imgG = document.createElement('img');
imgG.src = 'pic6.jpg';
imgG.style.left = "0px";
imgG.ondblclick = shift;

var imgH = document.createElement('img');
imgH.src = 'pic7.jpg';
imgH.style.left = "0px";
imgH.ondblclick = shift;

var animateImgG;
var animateImgH;

//Adds all the different items to the page on double click
function initialise() {
    if (body.className !== 'clicked') {
        body.appendChild(imgDiv);
        for (var i = 0; i < imagesAE.length; i++) {
            var img = document.createElement('img');
            img.src = imagesAE[i];
            setStyle(img);
            img.onclick = move;
            imgDiv.appendChild(img);
        }
        body.appendChild(inputF);
        setStyle(imgG);
        body.appendChild(imgG);
        setStyle(imgH);
        body.appendChild(imgH);
        body.className = 'clicked';
    }
}

function setStyle(image) {
    image.style.left = "0px";
    image.style.display = "block";
    image.style.width = "200px";
    image.style.position = "relative";
}


//Moves image from current position to top on first click.
function move() {
    if (this.className === 'moved') {
        return;
    } else {
        imgDiv.insertBefore(this, imgDiv.childNodes[0]);
        this.className = 'moved';
    }
}

//Functions for animating the images so they move across the screen
//Shift calls the movement functions (moveAlong and stop). It also checks if the clicked object is imgG or imgH
function shift() {
    if (this === imgG) {
        if (imgG.className === "shift") {
            stopImgG();
            imgG.className = "";
        } else {
            moveAlongImgG();
            imgG.className = "shift";
        }
    } else if (this === imgH) {

        if (imgH.className === "shift") {
            stopImgH();
            imgH.className = "";
        } else {
            moveAlongImgH();
            imgH.className = "shift";
        }
    }
}

//Moves imgG across the screen.
//Checks if position is greater than width and resets back to left.
//Set to 10 millisecond time delay
//animate variable needs to be in shift() so that stop() can see it.
//parseInt gets an integer from a string (left) which can then be used to append 'px' to provide a new left value.
function moveAlongImgG() {
    if (width < parseInt(imgG.style.left)) {
        imgG.style.left = "-300px";
        imgG.style.left = parseInt(imgG.style.left) + 1 + "px";
        animateImgG = setTimeout(moveAlongImgG, 10);
    } else {
        imgG.style.left = parseInt(imgG.style.left) + 1 + "px";
        animateImgG = setTimeout(moveAlongImgG, 10);
    }
}
//
// //Moves imgH across the screen.
// //Set to 1 millisecond time delay
function moveAlongImgH() {
    if (width < parseInt(imgH.style.left)) {
        imgH.style.left = "-300px";
        imgH.style.left = parseInt(imgH.style.left) + 1 + "px";
        animateImgH = setTimeout(moveAlongImgH, 1);
    } else {
        imgH.style.left = parseInt(imgH.style.left) + 1 + "px";
        animateImgH = setTimeout(moveAlongImgH, 1);
    }
}

//Clears timeout and stops the image from moving
function stopImgG() {
    clearTimeout(animateImgG);
}

function stopImgH() {
    clearTimeout(animateImgH);
}

//Jquery - sets the border color to red.
//the .on function has to be used as the buttons and images don't exist when the funciton is loaded into memory. This would usually be .click
//.on requires the event ("click") the element to attach ("button") and then the standard jQuery afterwards.
$(document).ready(function() {
    $("body").on("click", "input", function() {
        $("img").css("border", "1px solid red");
    });
});

//This is how I would have expected the JQuery to look. However as the images aren't loaded until after the page has loaded this prevents the function from working, hence the above workaround.
//If the script is added then the below code works as the images are loaded by the script before the page completes loading.
// $(document).ready(function() {
//     $("input").click(function() {
//         $("img").css("border", "1px solid red");
//     });
// });
