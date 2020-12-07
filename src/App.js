import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Containers/Sidebar';
import Chat from './Containers/Chat';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Containers/Login';
import { useStateValue } from './StateProvider';
import { actionTypes } from "./Reducer";
import socket from './socketConfig'


function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const result = localStorage.getItem("users");
    
    if (result!=null) {
      let userinfo=JSON.parse(result);
      userinfo.user._id=userinfo._id;
      dispatch({
        type: actionTypes.SET_USER,
        user: userinfo.user
      });
    }
  }, []);

  useEffect(()=>{
    if(user)
      socket.emit('login',user._id);
  },[user])
  window.onbeforeunload = function(event) { 
    socket.emit('logout',user._id);
  };

  return (
    <div className="app">
      {user==null ? (
        <Login />
      ) : (
          <div className="app_body">
            <BrowserRouter>
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
              </Switch>
            </BrowserRouter>

          </div>
        )}


    </div>
  );
}

export default App;
