document.getElementById("name-input").style.visibility = 'hidden'
var username = ""

function insertName() {
    document.getElementById("name-input").style.visibility = 'visible'
}

function setName() {
    username = document.getElementById('name-input').value
}