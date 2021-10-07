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

    modify: boolean = false;


    horseId:number = -1 ;
    inputName = "";
    inputColor = "";
    radioAvailable:boolean = false;

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
      this.horseService.getHorses().subscribe(horses => {
        this.horseList = horses;

        console.log(this.horseList);
      });

  }

  deleteHorse(id: number){
    this.horseService.deleteHorse(id).subscribe(() => {
        this.getHorseList();
    });

}

getUpdate(horse:IHorse){
    this.horseId = horse.id
    this.inputName = horse.name;
    this.inputColor = horse.color;
    // this.radioAvailable = horse.is_available;
    if(horse.is_available){
        this.radioAvailable = true;
    }else{
        this.radioAvailable = false;
    }

    this.modify = true;
}


updateHorse(){
    this.horseService.updateHorse(this.horseId, this.inputName, this.inputColor, this.radioAvailable).subscribe(() =>{

        this.getHorseList();
        this.modify = false;
    });

}





}
