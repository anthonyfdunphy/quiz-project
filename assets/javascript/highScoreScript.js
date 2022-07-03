const scoreClicker = document.getElementById('scoreboard-button')

let highscores = []

//function to save the username to local storage
function saveUserScore(username, score){
    const newHighscore = {username,score}

    highscores.push(newHighscore)

    //save in local storage refer to as highscores = value of highscores
    localStorage.setItem('highscores', JSON.stringify(highscores))
}

//INPUT CELL VALUE TO TABLE
function insertValues(){

    const localValue = localStorage.getItem('highscores')

    //convert localValue to JSON
    const localValues = JSON.parse(localValue)

    const scoreVal = document.getElementById('score-text')

    if (!scoreVal) return
    console.log(scoreVal)

    const formattedHighscores = localValues.map((it) => {
        return `<div>${it.username}, ${it.score}</div>`
    })

    const finalMarkUp = formattedHighscores.join('')

    scoreVal.innerHTML = finalMarkUp

    // const x = document.getElementById("sample-table").insertRow(0);
    // const y = x.insertCell(0);

    // const localVal = localStorage.getItem('Username')
    // y.innerHTML= localVal;
}

scoreClicker.addEventListener('click', insertValues())

// window.onload(
//     insertValues()
// )

 
