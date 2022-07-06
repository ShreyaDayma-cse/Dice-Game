var system=Math.floor(Math.random()*100)+1
var guess=0
function guessNumber(){

    var num = document.getElementById('in').value
    if(num === '' || num >100 || num<1){
        comsole.log('Invalid Input!! Try Again');
    }
    else{
        guess++
        var num = parseInt(document.getElementById('in').value)
        if(num === system)
        {
            console.log('Congratulations!! You got the answer correctly in '+guess+ '  turns');
            document.getElementById('out').innerHTML= '<b>Congratulations!! You got the answer correctly in '+guess+ '  turns</b> '+
            '<br><b>Your Score is '+ guess*10 + ' out of 100</b>'
        }
        else if(num > system){
            console.log('Guess a Smaller Number');
            document.getElementById('out').innerHTML='<i>Guess a Smaller Number</i>'
        }
        else {
            console.log('Guess a Greater Number');
            document.getElementById('out').innerHTML='<i>Guess a Greater Number</i>'
        }
    }
}
