import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import io from 'socket.io-client';

import './Chat.css';

const Chat = ({ location }) => {
    const [name, setName] = useState(''); //state
    const [room, setRoom] = useState('');

    useEffect(() => {
        const {name, room} = queryString.parse(location.search); //destructured

        setName(name);
        setRoom(room);
    });
    return (
        <h1>chat</h1>
    );
};

export default Chat;