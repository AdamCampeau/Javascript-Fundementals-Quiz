var highscoreContainer = document.getElementById('highscore-container')

var storage = JSON.parse(localStorage.getItem('highscore'))

if (storage === null) {
    highscoreContainer.textContent = 'No Highscores'
} else {
    highscoreContainer.textContent = ''
    for(var i = 0; i < storage.length; i++) {
        var p = document.createElement('p')
        p.textContent = 'Name: ' + storage[i].name + ' ----- Score: ' + storage[i].currentScore 
        highscoreContainer.append(p)
    }
}
