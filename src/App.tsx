
import './styles/app.scss';
import StateLogin from './mobX/StateLogin';
import { useRouters } from './router/Routers';
import { observer } from 'mobx-react-lite';


export const App: React.FC = observer(() => {

    const statusLogin: boolean = StateLogin.isLogin
    const router = useRouters( statusLogin )

    if ( !statusLogin ) return ( <div>{ router }</div> )

    return (
        <div className="app">
            <div className="app-container">
                {router}
            </div>
        </div>
    );
});