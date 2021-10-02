import { ILogin } from './ILogin';
import { USERS } from './mock-user-login';
import {EventEmitter, Injectable} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

    userList: Array<ILogin> = USERS;
    userAuth: any = null;
    userAuthEvent: any= new EventEmitter();


  constructor(private cookieService: CookieService) {

    if(cookieService.check('user')) {
        this.userAuth = JSON.parse(cookieService.get('user'));
    }
  }

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

            this.cookieService.set('user', JSON.stringify(this.userAuth));
            isChecked = true;
        }
    });
    return isChecked;

}

}
