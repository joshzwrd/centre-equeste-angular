import { Component, OnInit } from '@angular/core';
import { HorseService } from 'src/app/horse.service';
import { IHorse } from 'src/app/IHorse';
import { HORSES } from 'src/app/mock-horse';

@Component({
  selector: 'app-horses',
  templateUrl: './horses.component.html',
  styleUrls: ['./horses.component.css']
})
export class HorsesComponent implements OnInit {

    horseList: Array<IHorse> = [];

  constructor(private horseService:HorseService) {}

  ngOnInit(): void {
      this.getHorseList();
  }

  getHorseList(){
      this.horseService.getHorses().subscribe(horses => this.horseList = horses);
  }




}
