const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUserInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router); //middle ware call

io.on('connection', (socket) => { //클라에서 받아온 정보 (소켓)
    socket.on('join', ({name, room}, callback) => { //매개변수가 object
        const { error, user } = addUser( {id: socket.id, name, room} );

        if(error) return callback(error);

        //emit new event
        

        socket.join(user.room);
    });

    //user is gone
    socket.on('disconnect', () => { //basic disconnect effect
        console.log('User had left');
    });

});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));