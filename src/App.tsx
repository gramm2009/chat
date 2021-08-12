import StateLogin from './mobX/StateLogin';
import { useRouters } from './router/Routers';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import Avatar from '../public/img/avatar.jpg';
import { useState } from 'react';
import Icon from './components/SvgIcon';

export const App: React.FC = observer( () => {

    // const [checkedRout, setCheckedRout] = useState<string>('li-2');

    const statusLogin: boolean = StateLogin.isLogin;

    const router = useRouters( statusLogin );

    const icon = Icon();

    const fff = ( e: React.MouseEvent<HTMLUListElement, MouseEvent> ) => {
        const element = e.target as HTMLElement;
        if ( element.hasAttribute( 'id' ) ) {
            StateLogin.clickOnLink( element.id );
        }
    };
    if ( !statusLogin ) return <div>{ router }</div>;

    return (
        <div className="app">
            <div className="app-container">
                <div className="layout-admin">
                    <nav className="layout-admin__nav">
                        
                            <div className="layout-admin__nav__avatar-box">
                                <div className="layout-admin__nav__avatar-box__avatar">
                                    <img src={ Avatar } alt="" />
                                </div>
                                <div className="layout-admin__nav__avatar-box__name">John Doe</div>
                            </div>

                            <div className="layout-admin__nav__links-box">
                                <ul onClick={ ( e ) => fff( e ) }>
                                    <li className={ StateLogin.checkedRout === 'li-1' ? 'checked-rout' : '__' }>
                                        <Link to="/home" id="li-1">
                                            { icon.Grid() }
                                            home
                                        </Link>
                                    </li>

                                    <li className={ StateLogin.checkedRout === 'li-2' ? 'checked-rout' : '__' }>
                                        <Link to="/chat" id="li-2">
                                            { icon.Chat() }
                                            chat
                                        </Link>
                                    </li>

                                    <li className={ StateLogin.checkedRout === 'li-3' ? 'checked-rout' : '__' }>
                                        <Link to="contact" id="li-3">
                                            { icon.Person() }
                                            contact
                                        </Link>
                                    </li>

                                    <li className={ StateLogin.checkedRout === 'li-4' ? 'checked-rout' : '__' }>
                                        <Link to="notifications" id="li-4">
                                            { icon.Bell() }
                                            notifications
                                        </Link>
                                    </li>

                                    <li className={ StateLogin.checkedRout === 'li-5' ? 'checked-rout' : '__' }>
                                        <Link to="calendar" id="li-5">
                                            { icon.Calendar() }
                                            calendar
                                        </Link>
                                    </li>

                                    <li className={ StateLogin.checkedRout === 'li-6' ? 'checked-rout' : '__' }>
                                        <Link to="settings" id="li-6">
                                            { icon.Settings() }
                                            settings
                                        </Link>
                                    </li>

                                    <li onClick={ () => StateLogin.logOut() }>
                                        { icon.LogOut() }
                                        log out
                                    </li>
                                </ul>
                            </div>
                        
                    </nav>

                    <main className="layout-admin__main">
 
                        { router }
                    </main>
                </div>
            </div>
        </div>
    );
} );
