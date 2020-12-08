import React, { useEffect, useState } from 'react';
import SidebarChat from './SidebarChat';
import axios from '../axios';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import socket from '../socketConfig';

function SidebarChats() {
  const [{ user }] = useStateValue();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    console.log(user);
    axios.get('/rooms/sync', {
      headers: {
        _id: user._id,
      }
    }).then(response => {
      console.log(response.data);
      if(response.data[0]!=undefined)
        setRooms(response.data);
    })
  }, []);

  useEffect(() => {
    
    socket.on('newroom',(newRoom)=>{
      console.log("New ROom:", newRoom);
      setRooms([...rooms,newRoom])
    })
    
  }, [rooms]);

  return <div className="sidebarChats">
    {
      rooms.map(room=>
        <SidebarChat key={room._id.toString()} id={`/rooms/${room._id}`} room={room}/>
      )
    }
  </div>
}

export default SidebarChats;