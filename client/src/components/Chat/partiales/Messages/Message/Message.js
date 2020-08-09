import React from 'react';
import ReactEmoji from 'react-emoji';

import '../Messages.css';

//db 연동 시 객체 부분 수정하기
const Message = ({message: {user, text}, name}) => {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }
    //조건부 렌더링
    return (
        isSentByCurrentUser 
        ? (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundPink">
                    <p className = "messageText colorLight">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className = "messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )
    );
};

export default Message;

/*
!!! 프사 삽입 시
요 부분 고치기!!!!!! parameter에 추가해주기(객체 내 원소로)
*/