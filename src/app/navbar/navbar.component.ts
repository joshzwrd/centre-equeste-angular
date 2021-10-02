import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../pages/user-login/user-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    userAuth?: any;

  constructor(private userLoginService: UserLoginService) { }

  ngOnInit(): void {
      if(this.userLoginService.userAuth){
          this.userAuth = this.userLoginService.userAuth;
      }
   this.userLoginService.userAuthEvent.subscribe(() => {
        this.userAuth = this.userLoginService.getUser();
        console.log(this.userLoginService.getUser());
    });
}

}
