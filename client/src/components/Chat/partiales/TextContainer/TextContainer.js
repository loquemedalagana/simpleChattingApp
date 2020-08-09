import React from 'react';
import './TextContainer.css';

const TextContainer = ({users}) => {
    return (
        <div className = "textContainer">
            <div>
                <h1>레전드랑 대화하실래요?</h1>
            </div>

            {
                //users가 있으면 user출력, 없으면 null 리턴
            }
        </div>
    );
};

export default TextContainer;