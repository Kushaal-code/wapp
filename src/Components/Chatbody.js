import React from 'react';
import ChatMessage from './ChatMessage';



function ChatBody(props){
    return <div className="chatBody">
        {
            props.messages.map((messages)=>(
                <ChatMessage key={messages._id} message={messages}/>
            ))
        }
       
    </div>
};

export default ChatBody;