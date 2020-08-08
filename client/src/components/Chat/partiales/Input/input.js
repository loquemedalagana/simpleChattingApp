import React from 'react';
import './Input.css';

const Input = () => { //parameter?
    return (
        <form className = "form">
            <input 
                className = "input"
                type = "text"
                placeholder = "Type a message..."
                value = {message} 
                onChange={(event) => setMessage(event.target.value)} 
                onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button onClick=""></button>
        </form>
    );
}

export default Input;