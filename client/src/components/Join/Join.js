import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState(''); //react hook
    const [room, setRoom] = useState(''); //event에 훅을 더함
    return (
        <div className = "joinOuterContainer">
            <div className = "joinInnterContainer">
                <h1 className = "heading">Join</h1>
                <div><input placeholder = "your name" className = "joinInput" type = "text"
                 onChange = {
                     (event) => setName(event.target.value)
                }/></div>

                <div><input placeholder = "room name" className = "joinInput mt-20" type = "text"
                 onChange = {
                     (event) => setRoom(event.target.value)
                }/></div>
                
                <Link onClick={
                    event => (!name || !room) ? event.preventDefault() : null} 
                    to = {`/chat?name=${name}&room=${room}`}>

                    <button className = "button mt-20" type= "submit">Sign in</button>
                </Link>
            </div>
        </div>
    );
};

export default Join;