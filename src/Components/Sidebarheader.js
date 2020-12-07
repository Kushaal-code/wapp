import React from "react";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Avatar, IconButton } from "@material-ui/core";
import axios from '../axios';
import { actionTypes } from "../Reducer";
import {useStateValue} from '../StateProvider';
function SidebarHeader(){
    const [{user},dispatch]=useStateValue();
    const createChat=()=>{
        const roomName=prompt("Please enter a name for Chat");
        console.log(roomName);
    };
    function logout(){
        dispatch(actionTypes.LOGOUT);
        localStorage.clear();
        window.location.reload();
    }
    return(
        <div className="sidebarHeader">
        <Avatar src={user?.photoURL}/>
        {user?.displayName}
        <div className="headerRight">
            <IconButton>
                <DonutLargeIcon/>
            </IconButton>
            <IconButton onClick={createChat}>
                <ChatIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
            <IconButton  onClick={logout}>
                <PowerSettingsNewIcon/>
            </IconButton>
        </div>
        </div>
    )
}

export default SidebarHeader;