import { makeAutoObservable } from 'mobx';

class StateLogin {
    isLogin = true;

    admin = {
        email: 'test@gmail.com',
        password: '12345',
    };

    constructor () {
        makeAutoObservable( this );
    }

    login ( email: string, password: string ) {
        if ( this.admin.email === email && this.admin.password === password ) {
            this.isLogin = true
        } else {
            alert('Неправильный логин или пароль...')
        }
    }
}

export default new StateLogin();
