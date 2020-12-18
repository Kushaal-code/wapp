import React, { useRef, useState } from "react";
import ChatBody from "../Components/Chatbody";
import ChatHeader from "../Components/Chatheader";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import "../Css/Chat.css";
import axios from '../axios'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useStateValue } from '../StateProvider';
import socket from '../socketConfig';


function Chat(){
  const chatbodyMsgs=document.querySelector(".chatBody")

    const [input,setInput]=useState("");
    const [{ user }] = useStateValue();
    const { roomId }=useParams();
    const [roomHeader,setroomHeader]=useState("");
    const [messages, setMessages] = useState([]);
    const inputRef=useRef();

    useEffect(()=>{
      inputRef.current.focus();
    });

    useEffect(()=>{
        if(roomId){
            axios.get(`/rooms/${roomId}`,{
              headers: {
                _id: user._id,
              }
            }).then(response=>{
                setroomHeader(response.data.participants);
                setMessages(response.data.messages);
            })
        }
    },[roomId]);

    
    
      useEffect(() => {
        socket.on('newmessage',(newMessage)=>{
          if(roomId==newMessage.roomId){
            setMessages([...messages, newMessage]);
          }
        })

        if(chatbodyMsgs)
          chatbodyMsgs.scrollTop=chatbodyMsgs.scrollHeight;

      }, [messages]);
    

    const sendMessage= async (e) => {
        e.preventDefault(); 
        if(input.length>0){
        axios.post('/messages/new',{
            roomid:roomId,
            sender: user._id,
            message: input,
            timestamp: Date.now(),
        })
      }
        
        setInput("");
    };

    return <div className="chat">
        <ChatHeader roomHeader={roomHeader}/>
        <ChatBody messages={messages}/>
        <div className="chatFooter">
            <InsertEmoticonIcon/>
            <form>
                <input ref={inputRef} value={input} onChange={e=>setInput(e.target.value)} type="text" placeholder="Type a message"/>
                <button onClick={sendMessage} type="submit"><SendIcon/></button>
            </form>
        </div>
    </div>
}

export default Chat;