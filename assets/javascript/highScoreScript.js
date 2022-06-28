//function to save the username to local storage
function saveUserScore(username, score){
    localStorage.setItem(username, score)
}

//INPUT CELL VALUE TO TABLE

function insert_Row(){
    var x=document.getElementById("sampleTable").insertRow(0);
    var y = x.insertCell(0);

    var localVal = localStorage.getItem('Username')
    y.innerHTML= localVal;
}
 
