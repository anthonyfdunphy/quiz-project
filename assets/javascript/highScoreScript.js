//function to save the username to local storage
function saveUserScore(username, score){
    localStorage.setItem(username, score)
}

//function to set score to high scores page
function setUserScore(){
    document.getElementById('score-text').innerText = localStorage.getItem('Anthony')
}

setUserScore()
