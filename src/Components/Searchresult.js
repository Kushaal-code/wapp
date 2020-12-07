import React from "react";
import { Avatar } from '@material-ui/core';
import '../Css/SidebarChat.css'
import axios from '../axios';
import { useStateValue } from '../StateProvider';

function Searchresult(props) {
    const [{ user }] = useStateValue();

    function startChat(){
        console.log(user);
        axios.post('rooms/new',{
            participant1: user._id,
            participant2: props.result._id
            
        }).then(response=>console.log(response));

        props.onChange(null);
    }
    return (
        <div className="searchResult" onClick={startChat}>
            <Avatar src={props.result.avatarURL}/>
            <div className="resultInfo">
                <h2>{props.result.name}</h2>
            </div>
        </div>
    );
}

export default Searchresult;