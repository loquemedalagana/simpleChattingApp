import React from 'react';

import './InfoBar.css';

import onlineIcon from "../../../images/onlineIcon.png"; //const 쓰면 오류뜸
import closeIcon from "../../../images/closeIcon.png";

const InfoBar = ({ room }) => (
    <div className = "infoBar">
        <div className = "leftInnerContainer">
            <img className = "onlineIcon" src = {onlineIcon} alt="online image" />
            <h3>{room}</h3>
        </div>
        <div className = "rightInnerContainer">
            <a href="/"><img src = {closeIcon} alt = "close image"/></a>
        </div>
    </div>
)

export default InfoBar;

/*
닫기 표시 누르면 제자리로 감
본 앱에서는 메인화면 혹은 이전 경로로 감
*/