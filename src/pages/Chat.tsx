import { FlashOff } from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Chat () {

    const [ searchValue, setSearchValue ] = useState<string>( '' )

    const fff = ( e: React.MouseEvent ) => {
        const element = e.target as HTMLElement
    }

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

                    <div className="chat__chat-list__header__search" onClick={ ( e ) => fff( e ) }>
                        <input
                            type="text"
                            onChange={ ( e ) => setSearchValue( e.target.value ) }
                            className="chat__chat-list__header__search__input"
                        />
                        <div className="chat__chat-list__header__search__menu">Chat</div>
                        <div className="chat__chat-list__header__search__icon"></div>
                    </div>
                </div>

                <div className="chat__chat-list__body"></div>
            </div>

            {/* <div className="chat__chat-sms">САМ КОНКРЕТНЫЙ ЧАМ</div> */ }
        </div>
    );
}
