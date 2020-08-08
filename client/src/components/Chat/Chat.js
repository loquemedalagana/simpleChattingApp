import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import io from 'socket.io-client';
//import Input from './partiales/Input/input';

import InfoBar from './partiales/InfoBar/InfoBar';
import Input from './partiales/InfoBar/InfoBar';

import './Chat.css';

let socket; //empty variable to save data from client

const Chat = ({ location }) => {
    const [name, setName] = useState(''); //state
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'localhost:5000'; //배포 후 이부분 바꿈 (서버로 도착했을때 주소)

    useEffect(() => {
        const {name, room} = queryString.parse(location.search); //destructured

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        //console.log(socket);
        socket.emit('join', { name, room }, () => {
            //alert(error);
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }

    }, [ENDPOINT, location.search]); //오직 rerander할때만 이펙트가 옴

    //second user effect -> handling user messages
    useEffect(() => {
        socket.on('message', (message) => { //messages 배열에 push
            setMessages([...messages, message]); //지금까지 배열 + 새 메시지
        });
    }, [messages]); //배열이 업데이트 될때마다 호출함

    //function for sending message (전송을 위한 jsx 입력)
    const sendMessage = (event) => {
        event.preventDefault(); //새로고침 노가다 방지

        if(message){ //백단이랑 소통하는 부분
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    console.log(message, messages);

    return (
        <div className = "outerContainer">
            <div className = "container">
                <InfoBar room = {room} />
                <Input message = {message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    );
};

export default Chat;