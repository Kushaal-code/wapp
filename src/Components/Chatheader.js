import { Avatar, IconButton } from "@material-ui/core";
import AttachmentIcon from '@material-ui/icons/Attachment';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import React from 'react';
import '../Css/Chat.css';

function ChatHeader({ roomHeader }) {

    return (
        <div className="chatHeader">
            <Avatar src={roomHeader[0]?.avatarURL} />
            <div className="chatHeaderInfo">
                <h3>{roomHeader[0]?.name}</h3>
                <p>Last seen etc.</p>
            </div>
            <div className="chatHeaderRight">
                <IconButton>
                    <AttachmentIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    )

}

export default ChatHeader;