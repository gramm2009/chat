import { TextField, Button } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import StateLogin from '../mobX/StateLogin';

import '../styles/login-page.scss';

const Login: React.FC = observer( () => {

    const [ email, setEmail ] = useState( '' )
    const [ password, setPassword ] = useState('')

    const logIn = (): void => {
        if(email && password) StateLogin.login( email, password )
        else alert("Одно из полей пустое")
    }

    return (
        <div className="login-page">
            <form className="login-page__form">

                <h3>WELCOME</h3>

                <div className="login-page__form__input-email">
                    <TextField
                        label="Email"
                        type="mail"
                        variant="outlined"
                        onChange={ ( e ) => setEmail( e.target.value ) }
                    />
                </div>

                <div className="login-page__form__input-password">
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        onChange={ ( e ) => setPassword( e.target.value ) }
                    />
                </div>

                <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={ logIn }
                >
                    LOGIN
                </Button>

                <ul className="login-page__form__ul">
                    <li>
                        <span>Forgot </span>
                        <span className="login-page__form__ul__link">Email / Password?</span>
                    </li>
                    <li>
                        <span>Do not have account? </span>
                        <span className="login-page__form__ul__link">Sign Up</span>
                    </li>
                    <li className="login-page__form__ul__email">
                        <span>Email: test@gmail.com</span>
                    </li>
                    <li>
                        <span>Password: 12345</span>
                    </li>
                </ul>
            </form>


        </div>
    );
} );

export default Login