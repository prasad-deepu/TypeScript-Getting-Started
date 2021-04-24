function startGame() {
    var messageElement = document.getElementById('messages');
    messageElement.innerText = 'Welcome to MultiMath! Starting game now...';
}
document.getElementById('startGame').addEventListener('click', startGame);
