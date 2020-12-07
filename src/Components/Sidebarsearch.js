import React, { useEffect } from 'react';
import { useState } from "react";
import axios from '../axios';
import SearchIcon from '@material-ui/icons/Search';
import Searchresult from './Searchresult';
import { useStateValue } from '../StateProvider';

function SidebarSearch() {
    const [{ user }] = useStateValue();
    const [input, setInput] = useState("");
    const [result, setResult]=useState();
    useEffect(()=>{
        console.log(result);
    },[result])
    function onChange(newValue){
        setResult(newValue)
    }
    const search = async (e) => {
        e.preventDefault();
        console.log(input);
        console.log(user.email);
        if (input !== user.email) {
            console.log(input);
            axios.post('/users/search', {
                email: input,
            }).then(response =>{ 
                if(!response.data)
                    console.log("User not found");
                else{
                   console.log(response.data);
                   setResult(response.data);
                }
            });
        }
        else {
            console.log("Incorrect input");
        }

        setInput("");
    }
    return (
        <div className="sidebarSearchContainer">
            <div className="sidebarSearch">
                <form>
                    <button type="submit" onClick={search} hidden></button>
                    <SearchIcon />
                    <input type="text" className="search" placeholder="Search or start new chat" value={input} onChange={e => setInput(e.target.value)} />
                </form>
                {result?<Searchresult result={result} onChange={onChange}/>:null}
                
            </div>
        </div>
    )

}

export default SidebarSearch;