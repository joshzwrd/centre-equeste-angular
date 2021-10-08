import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorseService } from '../horses/horse.service';
import { IHorse } from '../horses/IHorse';

@Component({
  selector: 'app-new-horse',
  templateUrl: './new-horse.component.html',
  styleUrls: ['./new-horse.component.css']
})
export class NewHorseComponent implements OnInit {

    horseList: Array<IHorse> = [];
    inputName =  '';
    inputColor =  '';
    notif: boolean = false;

  constructor(private router:Router ,private HorseService: HorseService) { }

  ngOnInit(): void {
      this.getHorseList();
  }

  getHorseList(){
      this.HorseService.getHorses().subscribe((listHorse) => {
          this.horseList = listHorse;
      })
  }

  addHorse(){
    this.HorseService.addHorse(this.inputName, this.inputColor).subscribe(() =>{
        // this.inputName = '';
        // this.inputColor = '';
        // this.notif = true;
        this.router.navigate(['horses']);
    });



  }
//   addHorse(){

//     const targetNewId = this.horseList.length > 0 ? this.horseList[this.horseList.length - 1].id + 1 : 0;

//     if(this.inputName === '' && this.inputColor === ''){
//       return;
//     }

//     this.horseList.push({
//       id : targetNewId,
//       name : this.inputName,
//       color : this.inputColor,
//       isAvailable : true,
//     });

//     this.inputName = '';
//     this.inputColor = '';

//     this.notif = true;
//   }

}
