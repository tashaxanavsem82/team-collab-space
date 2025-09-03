const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

theconst app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Team Collab Space API!');
});

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
