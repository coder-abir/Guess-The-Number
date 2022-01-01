const displayMsg = function(message){
    document.querySelector('.message').textContent = message;
}
const bgColor = function(color){
    document.querySelector('body').style.backgroundColor = color;
}

let HighScore = 0;
let secretNumber = Math.trunc(Math.random()*20)+1;
//document.querySelector('.Number').textContent = secretNumber;
let Score = 20;
document.querySelector('.checkbutton').addEventListener('click',function(){
    let guessed = Number(document.querySelector('.guess').value);
    if(!guessed){
        displayMsg('NaN Input');
    }else if(guessed === secretNumber){

        displayMsg('Correct!');
        Score++;
        document.querySelector('.score').textContent = Score;
        bgColor('#30C209');
        HighScore = Score;
        document.querySelector('.High').textContent = HighScore;

    }else if(guessed !== secretNumber){
        if(Score > 1){displayMsg(guessed > secretNumber ? 'Too High!' : 'Too Low!');
        Score--;
        document.querySelector('.score').textContent = Score;
        bgColor('#406882');}else{
            displayMsg('you lost');
            bgColor('#F32629');
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    displayMsg('Start guessing...');
    bgColor('#222');
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.score').textContent = Score;
    document.querySelector('.guess').value = '';
});
