import React from 'react';
import {GoogleOutlined, FacebookFilled} from '@ant-design/icons';
import "firebase/app";
import {auth} from '../firebase'
import firebase from "firebase/app";

export const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h2> Bienvenido a uniChat</h2>
                <div className="login-button google"
                     onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined/> Inicia Sesión con Google
                </div>
                <br/> <br/>
                <div className="login-button facebook"
                     onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                    <FacebookFilled /> Inicia Sesión con Facebook
                </div>
            </div>
        </div>
    )
}
