const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router); //middle ware call

io.on('connection', (socket) => { //클라에서 받아온 정보
    console.log('we have a new conncection!');

    socket.on('join', ({name, room}) => { //매개변수가 object
        console.log(name, room);
    });

    //user is gone
    socket.on('disconnect', () => {
        console.log('User had left');
    });

});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));