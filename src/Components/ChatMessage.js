import React from 'react';
import { useStateValue } from '../StateProvider';

function ChatMessage({ message }){
    const [{ user }] = useStateValue();
    function timeConversion(time) {

        let millisec=Date.now()-time;

        let seconds = (millisec / 1000).toFixed(0);

        let minutes = (millisec / (1000 * 60)).toFixed(0);

        let hours = (millisec / (1000 * 60 * 60)).toFixed(1);

        let days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);
        if(seconds < 10){
            return "Just Now";
        }
        else if (seconds < 60) {
            return seconds + " Sec Ago";
        } else if (minutes < 60) {
            return minutes + " Min Ago";
        } else if (hours < 24) {
            return hours + " Hrs Ago";
        } else {
            return days + " Days Ago"
        }
    }
    return  <>
        <p className={`chatMsg ${message.sender==user._id?"receiver":null}`}>
        <span className="chatName">{message.name}</span>
        {message.message}
        <span className="chatMsgTimestamp">{timeConversion(message.timestamp)}</span>
        </p>
    </>
}

export default ChatMessage;