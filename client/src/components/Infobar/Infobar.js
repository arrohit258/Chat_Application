import React from 'react'
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'
import './Infobar.css'

const Infobar = ({room}) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online img"/>
                <h3>{room}</h3>

            </div>
            <div className="rightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close img"/></a>

            </div>
            
        </div>
    )
}

export default Infobar
