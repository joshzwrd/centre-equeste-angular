import { Component, OnInit } from '@angular/core';
import { HorseService } from 'src/app/pages/horses/horse.service';
import { IHorse } from 'src/app/pages/horses/IHorse';
import { HORSES } from 'src/app/pages/horses/mock-horse';
import { UserLoginService } from '../user-login/user-login.service';

@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css']
})
export class HorsesComponent implements OnInit {

    horseList: Array<IHorse> = [];
    userAuth?: any;

    inputId = "";
    inputName = "";
    inputColor = "";

  constructor(private horseService:HorseService, private userLoginService: UserLoginService) {}

  ngOnInit(): void {

    if(this.userLoginService.userAuth){
        this.userAuth = this.userLoginService.userAuth;
    }
    this.userLoginService.userAuthEvent.subscribe(() => {
        this.userAuth = this.userLoginService.getUser();
        console.log(this.userLoginService.getUser());
    });

      this.getHorseList();
  }

  getHorseList(){
      this.horseService.getHorses().subscribe(horses => this.horseList = horses);
  }

  deleteHorse(id: number){
    this.horseService.deleteHorse(id).subscribe(() => {
        this.getHorseList();
    });

}

updateHorse(){

}


}
