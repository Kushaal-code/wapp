import { Button } from "@material-ui/core";
import React from "react";
import '../Css/Login.css';
import { auth, provider } from "../firebase.js";
import { actionTypes } from "../Reducer";
import { useStateValue } from "../StateProvider"
import axios from '../axios';

function Login() {
    const [user = {}, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                if (result.additionalUserInfo.isNewUser) {
                    const timestamp = Date.now().toString();
                    axios.post('/users/add', {
                        email: result.user.email,
                        name: result.user.displayName,
                        avatarURL: result.user.photoURL,
                        joindate: timestamp,
                    });
                }
                axios.post('users/search', {
                    email: result.user.email
                }).then((response) => {
                    console.log(result);
                    result.user._id = response.data._id;
                    result._id=response.data._id;
                    localStorage.setItem("users", JSON.stringify(result));
                    dispatch({
                        type: actionTypes.SET_USER,
                        user: result.user
                    });

                })


            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="loginContainer">
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/user-login-25-1104994.png" alt="Img not found" />
                <div className="loginText">
                    <h1>Sign in to app</h1>
                </div>
                <Button onClick={signIn}>
                    <b>Sign in with Google</b>
                </Button>
            </div>

        </div>
    )
}
export default Login;