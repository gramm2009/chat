import { makeAutoObservable } from 'mobx';

class StateLogin {
    isLogin = false;
    checkedRout = "li-2"

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
            alert( 'Неправильный логин или пароль...' )
        }
    }

    logOut () {
        this.isLogin = false
        this.checkedRout = "li-2"
    }

    clickOnLink ( linkId: string ) {
        this.checkedRout = linkId
    }

}

export default new StateLogin();
