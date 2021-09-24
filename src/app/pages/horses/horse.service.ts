import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHorse } from './IHorse';
import { HORSES } from './mock-horse';

@Injectable({
  providedIn: 'root'
})
export class HorseService {

    horseList:Array<IHorse> = HORSES;

  constructor() { }

  getHorses(){
      return of(this.horseList);
  }
}
