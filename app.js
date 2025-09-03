const socket = io();
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message-input');

messageInput.addEventListener('keypress', handleKeyPress);

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const message = messageInput.value;
    socket.emit('chat message', message);
    messageInput.value = '';
}

socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messagesDiv.appendChild(messageElement);
});