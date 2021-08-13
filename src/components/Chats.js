import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase' 


export const Chats = () => {
    return (
        <div className="chats-page">
           <div className="nav-bar">
                <div className="logo-tab">
                    Unichat
                </div>
                <div className="logo-tab">
                    Cerrar Sesión
                </div>
            </div>
            <ChatEngine
                height="calc(100vh - 66px"
                projectId=""/>
        </div>
    )
}
