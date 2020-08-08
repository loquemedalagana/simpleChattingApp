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