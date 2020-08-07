const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router); //middle ware call

io.on('connection', (socket) => {
    console.log('we have a new conncection!');

    //user is gone
    socket.on('disconnect', () => {
        console.log('User had left');
    });

//    socket.on('chat message', (msg) => {
//        console.log('message: ' + msg);
 //   })
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));