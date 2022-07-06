var button1 = document.getElementById('p1btn');
var button2 = document.getElementById('p2btn');
var score1=0;
var score2=0;
var randomnumber1=0
var randomnumber2=0
var player1=1
var player2=1
var winningScore = 20

var display1 = document.getElementById('randomnumberP1');
var display2 = document.getElementById('randomnumberP2');

var scoreDisplay1 = document.querySelector(".p1s")
var scoreDisplay2 = document.querySelector(".p2s")

var winner=document.getElementById('display');


button1.addEventListener('click',function(){
    if(player1 === 1){
        randomnumber1 = Math.floor(Math.random()*6)+1;
        score1 += randomnumber1

        display1.innerHTML=randomnumber1;
        scoreDisplay1.innerHTML = score1;

        player1 = 0;
        player2 = 1;
        gameStatus()

    }
})
button2.addEventListener('click',function(){
    if(player2 === 1){
        randomnumber2 = Math.floor(Math.random()*6)+1;
        score2 += randomnumber2

        display2.innerHTML=randomnumber2;
        scoreDisplay2.innerHTML = score2;

        
        player1 = 1;
        player2 = 0;
        gameStatus()
    }
})

function gameStatus(){
    
    if(score1 >= winningScore){
        winner.innerHTML="Player1 win";
        player1 = 0;
        player2 = 0;
    }
    if(score2 >= winningScore){
        winner.innerHTML="Player2 win";
        player1 = 0;
        player2 = 0;
    }
}
