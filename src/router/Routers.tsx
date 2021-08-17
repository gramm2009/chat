import { Redirect, Route, Switch } from 'react-router-dom';
import { Home, Chat, Contact, Login, Notifications, Settings, Calendar } from "../pages";
import Chat2 from '../pages/Chat2';



export const useRouters = ( status: boolean ) => {
    if ( status ) {
        return (
            <Switch>
                <Route exact path="/home" component={ Home } />
                
                <Route exact path="/chat" component={ Chat } />
                <Route exact path="/chat/chat" component={ Chat2 } />
                
                <Route exact path="/contact" component={ Contact } />
                <Route exact path="/notifications" component={ Notifications } />
                <Route exact path="/calendar" component={ Calendar } />
                <Route exact path="/settings" component={ Settings } />

                <Redirect to="/chat" />
            </Switch>
        );
    } else {
        return (
            <Switch>
                <Route exact path="/login" component={ Login } />
                <Redirect to="/login" />
            </Switch>
        );
    }
};
