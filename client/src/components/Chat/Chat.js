import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import io from 'socket.io-client';

import './Chat.css';

let socket; //empty variable to save data from client

const Chat = ({ location }) => {
    const [name, setName] = useState(''); //state
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:5000'; //배포 후 이부분 바꿈 (서버로 도착했을때 주소)

    useEffect(() => {
        const {name, room} = queryString.parse(location.search); //destructured

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        //console.log(socket);
        socket.emit('join', { name, room }, ({ error }) => {
            alert(error);
        });

    }, [ENDPOINT, location.search]); //오직 rerander할때만 이펙트가 옴
    
    return (
        <h1>chat</h1>
    );
};

export default Chat;