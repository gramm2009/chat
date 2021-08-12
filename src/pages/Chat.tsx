import React from 'react';
import { Link } from 'react-router-dom';

export default function Chat () {
    return (
        <div className="chat">

            <div className="chat__chat-list">

                <div className="chat__chat-list__header">

                    <div className="chat__chat-list__header__title">
                        <h3>Chats</h3>
                        <p>Recent Chats</p>
                    </div>

                    <button className="chat__chat-list__header__btn">
                        + Create New Chat
                    </button>

                    <div className="chat__chat-list__header__search">
                        <input type="text" />
                        <div className="chat__chat-list__header__search__menu">Message</div>
                        <div>Search chat</div>
                    </div>
                </div>

                <div className="chat__chat-list__body"></div>
            </div>

            {/* <div className="chat__chat-sms">САМ КОНКРЕТНЫЙ ЧАМ</div> */}
        </div>
    );
}
