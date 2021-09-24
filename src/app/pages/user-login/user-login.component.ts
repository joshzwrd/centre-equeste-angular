import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from './user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

    inputLogin = '';
    inputPassword = '';
    badAuth: boolean = false;

  constructor(private router:Router, private userLoginService:UserLoginService) { }

  ngOnInit(): void {
      this.tryLogin();
  }


  tryLogin() {
    if(this.userLoginService.login(this.inputLogin, this.inputPassword)) {
        console.log(this.userLoginService.getUser());
        this.router.navigate(['/']);
    } else {
        this.badAuth = true;
    }
}
}
