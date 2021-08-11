import { Redirect, Route, Switch } from 'react-router-dom';
import { Home, Chat, Contact, Login, Notifications, Settings, Calendar } from "../pages";


import Admin from '../layout/Admin';
export const useRouters = ( status: boolean ) => {
    if ( status ) {
        return (
            <Switch>
                <Route exact path="/home" component={ Home } />
                <Route exact path="/chat" component={ Chat } />
                <Route exact path="/contact" component={ Contact } />
                <Route exact path="/notifications" component={ Notifications } />
                <Route exact path="/calendar" component={ Calendar } />
                <Route exact path="/settings" component={ Settings } />
                <Route exact path="/" component={ Admin } />

                <Redirect to="/" />
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
