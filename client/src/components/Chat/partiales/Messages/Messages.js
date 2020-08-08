//댓글 게시판에서 이거 재탕함
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';

import './Messages.css';


const Messages = ({messages, name}) => {
    return (
        <ScrollToBottom>
            {messages.map((message, idx) => (
              <div key={idx}>
                  <Message message = {message} name = {name} />
              </div>  
            ))}
        </ScrollToBottom>
    );
};

export default Messages;