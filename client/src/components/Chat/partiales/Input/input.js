import React from 'react';

const Input = () => {
    return (
        <input 
        value = {message} 
        onChange={(event) => setMessage(event.target.value)} 
        onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
        />
    );
}

export default Input;