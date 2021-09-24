import { ILogin } from './ILogin';
import { USERS } from './mock-user-login';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

    userList: Array<ILogin> = USERS;
    userAuth: any = null;
    userAuthEvent: any= new EventEmitter();


  constructor() {}

  getUser(){
    return this.userAuth;
}

  login(login: string, password: string) {
    let isChecked = false;
    this.userList.forEach((currentUser) => {
        if(currentUser.login === login && currentUser.password === password) {
            this.userAuth = currentUser;
            console.log(currentUser)
            this.userAuthEvent.emit(null);
            isChecked = true;
        }
    });
    return isChecked;

}

}
