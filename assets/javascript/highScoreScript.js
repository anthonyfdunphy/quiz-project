//function to save the username to local storage
function saveUserScore(username, score){
    localStorage.setItem(username, score)
}

//function to set score to high scores page
function setUserScore(){
    //document.getElementById('score-text').innerText = localStorage.getItem('Anthony')
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        console.log( localStorage.getItem( localStorage.key( i ) ) );
        document.getElementById('score-text').innerText += localStorage.getItem(localStorage.key( i ))
    }
}

setUserScore()

