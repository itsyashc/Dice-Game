var x = Math.floor(Math.random() * 6 + 1);
var y = Math.floor(Math.random() * 6 + 1);

var imgloc = document.querySelector(".diceImg1");
var imgRandomX = "images/dice"+ x +".png";
imgloc.setAttribute("src",imgRandomX);

var imgloc = document.querySelector(".diceImg2");
var imgRandomY = "images/dice"+ y +".png";
imgloc.setAttribute("src",imgRandomY);

if (x > y) {
    document.querySelector(".mainHeading").textContent ="Player first win.";
} else if (y > x) {
    document.querySelector(".mainHeading").textContent ="Player second win.";
} else {
    document.querySelector(".mainHeading").textContent ="Match Tie, both get same number.";
}

