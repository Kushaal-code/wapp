import React, { useEffect } from "react";
import SidebarChats from "../Components/SidebarChats";
import SidebarHeader from "../Components/Sidebarheader";
import SidebarSearch from "../Components/Sidebarsearch";
import "../Css/Sidebar.css"

function Sidebar(){
    useEffect(()=>{
        
    });
    return <div className="sidebar">
        <SidebarHeader/>
        <SidebarSearch/>
        <SidebarChats/>
    </div>;
}
export default Sidebar;