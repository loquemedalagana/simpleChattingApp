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

        //emit new event(~가 들어왔습니다)
        socket.emit('message', {user: '관리자', text: `${user.name}님, 어서오세요!`}); //새 유저에게
        socket.broadcast.to(user.room).emit('message', {user: '관리자', text: `${user.name}님이 입장했습니다.`}); //모든 유저에게

        socket.join(user.room);

        callback(); //에러 있을 때 프론트에 전달
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', {user: user.name, text: message}); //프엔에서 받아온 정보

        callback();
    });

    //user is gone
    socket.on('disconnect', () => { //basic disconnect effect
        console.log('User had left');
    });

});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));