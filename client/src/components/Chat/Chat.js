import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import io from 'socket.io-client';

import './Chat.css';

const Chat = ({ location }) => {
    useEffect(() => {
        const data = queryString.parse(location.search); //from react router

        console.log(location.search);
        console.log(data);
    });
    return (
        <h1>chat</h1>
    );
};

export default Chat;