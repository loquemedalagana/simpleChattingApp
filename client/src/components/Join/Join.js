import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState(''); //react hook
    const [room, setRoom] = useState('');
    return (
        <h1>Join</h1>
    );
};

export default Join;