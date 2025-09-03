const socket = io();
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message-input');

// Listen for keypress events in the message input
messageInput.addEventListener('keypress', handleKeyPress);

function handleKeyPress(event) {
    // Check if the 'Enter' key is pressed
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    // Get the trimmed message value
    const message = messageInput.value.trim();
    // Emit the message if it's not empty
    if (message) {
        socket.emit('chat message', message);
        messageInput.value = '';
    }
}

// Receive chat messages from the server
socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom of messagesDiv
});