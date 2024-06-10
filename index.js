var RandomNumber = Math.floor(Math.random() * 6) + 1;
var DiceRandomPic = "./asset/dice" + RandomNumber + ".png";
var DIceImage = document.querySelectorAll("img")[0];
DIceImage.setAttribute("src",DiceRandomPic);

var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
var DiceRandomPic2 = "./asset/dice" + RandomNumber1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",DiceRandomPic2);