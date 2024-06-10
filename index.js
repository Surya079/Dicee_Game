onload = DefaultPage()
function DefaultPage (){
    document.querySelector(".Dicee1").setAttribute("src","./asset/dice6.png");
    document.querySelector(".Dicee2").setAttribute("src","./asset/dice6.png");
} 
function RollDice(){
    var RandomNumber = Math.floor(Math.random() * 6) + 1;
    var DiceRandomPic = "./asset/dice" + RandomNumber + ".png";
    var DIceImage = document.querySelectorAll("img")[0];
    DIceImage.setAttribute("src",DiceRandomPic);

    var RandomNumber1 = Math.floor(Math.random() * 6) + 1;
    var DiceRandomPic2 = "./asset/dice" + RandomNumber1 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src",DiceRandomPic2);
    var Player1 = "Player 1 Win 🚩";
    var Player2 = "Player 2 Win 🚩";
    if (RandomNumber > RandomNumber1){
        document.querySelector(".Name-winner").textContent = Player1
    }else if( RandomNumber < RandomNumber1){
        document.querySelector(".Name-winner").textContent = Player2
    }else if(RandomNumber == RandomNumber1){
        document.querySelector(".Name-winner").textContent = "Draw The Match";
    }
}
