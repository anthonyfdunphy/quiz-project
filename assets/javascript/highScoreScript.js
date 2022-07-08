const scoreClicker = document.getElementById('scoreboard-button');

let highscores = [];

//function to save the username to local storage
function saveUserScore(username, score){
    const newHighscore = {username,score};

    highscores.push(newHighscore);

    //save in local storage refer to as highscores = value of highscores
    localStorage.setItem('highscores', JSON.stringify(highscores));
}

//Input cell value to table
function insertValues(){

    const localValue = localStorage.getItem('highscores');

    //convert localValue to JSON
    const localValues = JSON.parse(localValue);

    const scoreVal = document.getElementById('score-text');

    if (!scoreVal) return;

    const formattedHighscores = localValues.map((it) => {
        return `<div>${it.username}, ${it.score}</div>`;
    });

    const finalMarkUp = formattedHighscores.join('');

    scoreVal.innerHTML = finalMarkUp;
}

if(scoreClicker != null){
    scoreClicker.addEventListener('click', insertValues());
}

 
