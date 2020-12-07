import { Avatar } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import '../Css/SidebarChat.css'
import { Link } from 'react-router-dom';
import socket from '../socketConfig';



function SidebarChat({ room }) {
    //console.log(room[0].participants);
    const [lastmessage, setlast]= useState("");
    useEffect(()=>{
        setlast(room.messages[0]?room.messages[0].message:null);
    },[]);
    useEffect(()=>{
        socket.on('newmessage',(newMessage)=>{
            if(room._id==newMessage.roomId){
                setlast(newMessage.message);
            }
        })
    },[lastmessage])
    console.log(room)
    return (
        <Link to={`/rooms/${room._id}`}>
            <div className="sidebarChat">
                <Avatar src={room.participants[0]?room.participants[0].avatarURL:room.participants[1].avatarURL}/>
                <div className="sidebarChatInfo">
                    <h2>{room.participants[0]?room.participants[0].name:room.participants[1].name}</h2>
                    <p>{lastmessage}</p>
                </div>
            </div>
        </Link>
    );
}

export default SidebarChat;