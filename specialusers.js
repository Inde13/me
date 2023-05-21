var username = ""

function setName() {
    username = document.getElementById('name-input').value
    document.getElementById('name-input').value = ""
}

function checkName() {
    if (username == "Teste") {
        window.location.href = "index.html"
        document.getElementById("eu-sou").innerHTML = "Eu sou Teste"
    }
}
